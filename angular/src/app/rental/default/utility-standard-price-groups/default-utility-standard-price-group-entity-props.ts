import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import { UtilityStandardPriceGroupDto } from '@proxy';

export const DEFAULT_UTILITY_STANDARD_PRICE_GROUP_ENTITY_PROPS =
  EntityProp.createMany<UtilityStandardPriceGroupDto>([
    {
      type: ePropType.Boolean,
      name: 'isDeleted',
      displayName: 'Rental::IsDeleted',
      columnWidth: 100,
    },
    {
      type: ePropType.String,
      name: 'name',
      displayName: 'Rental::Name',
      columnWidth: 150,
    },
    {
      type: ePropType.Date,
      name: 'effectiveDate',
      displayName: 'Rental::EffectiveDate',
      columnWidth: 80,
    },
    {
      type: ePropType.String,
      name: 'note',
      displayName: 'Rental::Note',
      columnWidth: 80,
    },
  ]);
