import { ToolbarAction } from '@abp/ng.theme.shared/extensions';
import { UtilityStandardPriceDto } from '@proxy';
import { UtilityStandardPriceComponent } from '../../components/utility-standard-prices/utility-standard-price.component';

export const DEFAULT_UTILITY_STANDARD_PRICE_TOOLBAR_ACTIONS = ToolbarAction.createMany<
  UtilityStandardPriceDto[]
>([
  {
    text: 'Rental::New',
    icon: 'fas fa-plus',
    action: data => data.getInjected(UtilityStandardPriceComponent).add(),
    // permission: 'Rental.UtilityStandardPrices.Create',
  },
]);
