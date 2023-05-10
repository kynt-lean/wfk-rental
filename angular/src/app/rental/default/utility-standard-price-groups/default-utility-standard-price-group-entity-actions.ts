import { EntityAction } from '@abp/ng.theme.shared/extensions';
import { UtilityStandardPriceGroupDto } from '@proxy';
import { UtilityStandardPriceGroupComponent } from '../../components/utility-standard-price-groups/utility-standard-price-group.component';

export const DEFAULT_UTILITY_STANDARD_PRICE_GROUP_ENTITY_ACTIONS =
  EntityAction.createMany<UtilityStandardPriceGroupDto>([
    {
      text: 'Rental::Edit',
      icon: 'fas fa-edit',
      action: data => data.getInjected(UtilityStandardPriceGroupComponent).edit(data.record),
      // permission: 'Rental.ApartmentUtilityPrices.Update',
    },
    {
      text: 'Rental::Delete',
      icon: 'fas fa-trash',
      action: data => data.getInjected(UtilityStandardPriceGroupComponent).delete(data.record),
      // permission: 'Rental.ApartmentUtilityPrices.Delete',
    },
  ]);
