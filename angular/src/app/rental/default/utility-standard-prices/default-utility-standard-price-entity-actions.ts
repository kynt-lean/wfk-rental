import { EntityAction } from '@abp/ng.theme.shared/extensions';
import { UtilityStandardPriceDto } from '@proxy';
import { UtilityStandardPriceComponent } from '../../components/utility-standard-prices/utility-standard-price.component';

export const DEFAULT_UTILITY_STANDARD_PRICE_ENTITY_ACTIONS =
  EntityAction.createMany<UtilityStandardPriceDto>([
    {
      text: 'Rental::Edit',
      icon: 'fas fa-edit',
      action: data => data.getInjected(UtilityStandardPriceComponent).edit(data.record),
      // permission: 'Rental.ApartmentUtilityPrices.Update',
    },
    {
      text: 'Rental::Delete',
      icon: 'fas fa-trash',
      action: data => data.getInjected(UtilityStandardPriceComponent).delete(data.record),
      // permission: 'Rental.ApartmentUtilityPrices.Delete',
    },
  ]);
