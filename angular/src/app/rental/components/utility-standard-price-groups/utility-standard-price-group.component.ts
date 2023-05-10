import { ListService } from '@abp/ng.core';
import { EXTENSIONS_IDENTIFIER } from '@abp/ng.theme.shared/extensions';
import { Component, inject } from '@angular/core';
import {
  GetUtilityStandardPriceGroupsInput,
  UtilityStandardPriceGroupCreateDto,
  UtilityStandardPriceGroupDto,
  UtilityStandardPriceGroupService,
  UtilityStandardPriceGroupUpdateDto,
} from '@proxy';
import { AbstractCrudComponent } from '../../../shared/abstract-crud-component';
import { eRentalComponents } from '../../enums/components.enum';

@Component({
  selector: 'app-rental-utility-standard-price-group',
  templateUrl: './utility-standard-price-group.component.html',
  providers: [
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eRentalComponents.UtilityStandardPriceGroups,
    },
    ListService,
  ],
})
export class UtilityStandardPriceGroupComponent extends AbstractCrudComponent<
  UtilityStandardPriceGroupDto,
  string,
  GetUtilityStandardPriceGroupsInput,
  UtilityStandardPriceGroupCreateDto,
  UtilityStandardPriceGroupUpdateDto,
  UtilityStandardPriceGroupService
> {
  mapToCreate = (omitId: Omit<UtilityStandardPriceGroupDto, 'id'>) => omitId;
  mapToUpdate = (omitId: Omit<UtilityStandardPriceGroupDto, 'id'>) => omitId;
  protected service = inject(UtilityStandardPriceGroupService);

  override afterSaved = (saved: UtilityStandardPriceGroupDto) => {
    this.selected = saved;
    this.list.get();
  };

  constructor() {
    super();
    this.localizationResource = 'Rental';
    this.title = 'UtilityStandardPriceGroups';
    this.createModalTitle = 'NewUtilityStandardPriceGroups';
    this.editModalTitle = 'EditUtilityStandardPriceGroups';
  }

  ngOnInit() {
    this.hookToQuery();
  }

  ngOnDestroy() {
    this.listSubscription.unsubscribe();
  }
}
