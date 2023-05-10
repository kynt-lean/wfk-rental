import { ListService } from '@abp/ng.core';
import { EXTENSIONS_IDENTIFIER } from '@abp/ng.theme.shared/extensions';
import { Component, inject } from '@angular/core';
import {
  GetUtilityStandardPricesInput,
  UtilityStandardPriceCreateDto,
  UtilityStandardPriceDto,
  UtilityStandardPriceService,
  UtilityStandardPriceUpdateDto,
} from '@proxy';
import { AbstractCrudComponent } from '../../../shared/abstract-crud-component';
import { eRentalComponents } from '../../enums/components.enum';

@Component({
  selector: 'app-rental-utility-standard-price',
  templateUrl: './utility-standard-price.component.html',
  providers: [
    {
      provide: EXTENSIONS_IDENTIFIER,
      useValue: eRentalComponents.UtilityStandardPrices,
    },
    ListService,
  ],
})
export class UtilityStandardPriceComponent extends AbstractCrudComponent<
  UtilityStandardPriceDto,
  string,
  GetUtilityStandardPricesInput,
  UtilityStandardPriceCreateDto,
  UtilityStandardPriceUpdateDto,
  UtilityStandardPriceService
> {
  mapToCreate = (omitId: Omit<UtilityStandardPriceDto, 'id'>) => omitId;
  mapToUpdate = (omitId: Omit<UtilityStandardPriceDto, 'id'>) => omitId;
  protected service = inject(UtilityStandardPriceService);

  constructor() {
    super();
    this.localizationResource = 'Rental';
    this.title = 'UtilityStandardPrices';
    this.createModalTitle = 'NewUtilityStandardPrices';
    this.editModalTitle = 'EditUtilityStandardPrices';
  }

  ngOnInit() {
    this.hookToQuery();
  }

  ngOnDestroy() {
    this.listSubscription.unsubscribe();
  }
}
