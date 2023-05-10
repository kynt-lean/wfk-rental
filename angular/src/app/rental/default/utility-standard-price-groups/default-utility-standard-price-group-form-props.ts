import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import { UtilityStandardPriceGroupDto } from '@proxy';

export const DEFAULT_UTILITY_STANDARD_PRICE_GROUP_FORM_PROPS =
  FormProp.createMany<UtilityStandardPriceGroupDto>([
    {
      type: ePropType.String,
      name: 'name',
      displayName: 'Rental::Name',
    },
    {
      type: ePropType.Date,
      name: 'effectiveDate',
      displayName: 'Rental::EffectiveDate',
    },
    {
      type: ePropType.Text,
      name: 'note',
      displayName: 'Rental::Note',
    },
    {
      type: ePropType.String,
      name: 'concurrencyStamp',
      visible: () => false,
    },
    {
      type: ePropType.String,
      name: 'id',
      visible: () => false,
    },
  ]);
