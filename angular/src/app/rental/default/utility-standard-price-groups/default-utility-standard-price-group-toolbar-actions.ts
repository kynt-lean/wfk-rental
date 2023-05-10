import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { UtilityStandardPriceGroupDto } from '@proxy';
import { UtilityStandardPriceGroupComponent } from '../../components/utility-standard-price-groups/utility-standard-price-group.component';

export const DEFAULT_UTILITY_STANDARD_PRICE_GROUP_TOOLBAR_ACTIONS = ToolbarAction.createMany<
  UtilityStandardPriceGroupDto[]
>([
  {
    text: 'Rental::New',
    icon: 'fas fa-plus',
    action: data => data.getInjected(UtilityStandardPriceGroupComponent).add(),
    // permission: 'Rental.UtilityStandardPriceGroups.Create',
  },
]);
