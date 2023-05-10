import { ListService, PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Confirmation, ConfirmationService, ToasterService } from '@abp/ng.theme.shared';
import { FormPropData, generateFormFromProps } from '@abp/ng.theme.shared/extensions';
import { Injector, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription, finalize, merge, of } from 'rxjs';

export type FormGroupControl<T> = {
  [K in keyof T]: FormControl<T[K]>;
};

export interface IEntityDto<TKey extends string | number> {
  id?: TKey;
}

export interface ICrudService<
  TDto extends IEntityDto<TKey>,
  TKey extends string | number,
  TGetListInput extends PagedAndSortedResultRequestDto,
  TCreateInput,
  TUpdateInput
> {
  create: (input: TCreateInput) => Observable<TDto>;
  delete: (id: TKey) => Observable<void>;
  get: (id: TKey) => Observable<TDto>;
  getList: (input: TGetListInput) => Observable<PagedResultDto<TDto>>;
  update: (id: TKey, input: TUpdateInput) => Observable<TDto>;
}

export abstract class AbstractCrudComponent<
  TDto extends IEntityDto<TKey>,
  TKey extends string | number,
  TGetListInput extends PagedAndSortedResultRequestDto,
  TCreateInput,
  TUpdateInput,
  TService extends ICrudService<TDto, TKey, TGetListInput, TCreateInput, TUpdateInput>
> {
  localizationResource: string;
  title: string;
  createModalTitle: string;
  editModalTitle: string;
  savedSuccessfullyMessage: string;
  deletionConfirmationMessage: string;
  deletionTitleMessage: string;
  deletedSuccessfullyMessage: string;

  list: ListService<TGetListInput> = inject(ListService);
  data: PagedResultDto<TDto> = { items: [], totalCount: 0 };
  filters = <TGetListInput>{};
  triggerEmptyData: boolean = false;
  selected = <TDto>{};
  form = new FormGroup(<FormGroupControl<TDto>>{});
  isModalVisible: boolean = false;
  isModalBusy: boolean = false;
  edittingMode: boolean = false;
  triggerModalTitle: boolean = true;
  modalTitle: string = 'Title';

  listSubscription = <Subscription>{};

  protected onHookToQuery = (query: TGetListInput) => <TGetListInput>{ ...query, ...this.filters };
  protected subscribeToQuery = (res: PagedResultDto<TDto>) => {
    this.data = res;
    this.afterGetList(res);
  };

  protected hookToQuery() {
    this.listSubscription = this.list
      .hookToQuery(query => this.onGetList(this.onHookToQuery(query)))
      .subscribe(this.subscribeToQuery);
  }

  abstract mapToCreate: (omitId: Omit<TDto, 'id'>) => TCreateInput;
  abstract mapToUpdate: (omitId: Omit<TDto, 'id'>) => TUpdateInput;

  onGetList = (query: TGetListInput): Observable<PagedResultDto<TDto>> =>
    this.triggerEmptyData
      ? merge(
          of(<PagedResultDto<TDto>>{ totalCount: 0, items: [] }),
          this.service.getList(this.onHookToQuery(query))
        )
      : this.service.getList(this.onHookToQuery(query));

  afterGetList = (data: PagedResultDto<TDto>): void => {};
  afterAdded = (): void => {};
  afterEdited = (selected: TDto): void => {};
  afterSaved = (saved: TDto): void => this.list.get();
  beforeDeleting = (selected: TDto) => {};
  afterDeleted = (deleted: TDto): void => this.list.get();
  afterBuiltForm = (form: FormGroup<FormGroupControl<TDto>>): void => {};

  protected abstract service: TService;
  protected confirmation = inject(ConfirmationService);
  protected toaster = inject(ToasterService);
  protected injector = inject(Injector);

  constructor() {
    this.localizationResource = 'AbpUi';
    this.title = 'Title';
    this.createModalTitle = 'New';
    this.editModalTitle = 'Edit';
    this.savedSuccessfullyMessage = 'SavedSuccessfully';
    this.deletionConfirmationMessage = 'DeletionConfirmationMessage';
    this.deletionTitleMessage = 'AreYouSure';
    this.deletedSuccessfullyMessage = 'DeletedSuccessfully';
  }

  add() {
    this.selected = <TDto>{};
    this.buildForm(this.selected);
    this.edittingMode = false;
    this.isModalVisible = true;
    if (this.triggerModalTitle) {
      this.modalTitle = this.createModalTitle;
    }
    this.afterAdded();
  }

  edit(selected: TDto) {
    if (selected.id) {
      this.service.get(selected.id).subscribe(res => {
        this.selected = res;
        this.buildForm(res);
        this.edittingMode = true;
        if (this.triggerModalTitle) {
          this.modalTitle = this.editModalTitle;
        }
        this.isModalVisible = true;
        this.afterEdited(res);
      });
    }
  }

  save = (modalValue: TDto) => {
    const { id, ...omitId } = modalValue;
    const request = id
      ? this.service.update(id, this.mapToUpdate(omitId))
      : this.service.create(this.mapToCreate(omitId));
    this.isModalBusy = true;
    request.pipe(finalize(() => (this.isModalBusy = false))).subscribe(res => {
      this.edittingMode = false;
      this.isModalVisible = false;
      this.toaster.success(`${this.localizationResource}::${this.savedSuccessfullyMessage}`);
      this.afterSaved(res);
    });
  };

  delete(selected: TDto) {
    this.beforeDeleting(selected); // uses to handle deletion messages
    this.confirmation
      .warn(
        `${this.localizationResource}::${this.deletionConfirmationMessage}`,
        `${this.localizationResource}::${this.deletionTitleMessage}`,
        {}
      )
      .subscribe(status => {
        if (status === Confirmation.Status.confirm && selected.id) {
          this.service.delete(selected.id).subscribe(_ => {
            this.toaster.success(
              `${this.localizationResource}::${this.deletedSuccessfullyMessage}`
            );
            this.selected = <TDto>{};
            this.afterDeleted(selected);
          });
        }
      });
  }

  protected buildForm(selected: TDto) {
    const data = new FormPropData(this.injector, selected);
    this.form = generateFormFromProps(data);
    this.afterBuiltForm(this.form);
  }
}
