import { EntityProp, ePropType } from '@abp/ng.theme.shared/extensions';
import {
  UtilityStandardPriceDto,
  UtilityStandardPriceGroupService,
  rentalUtilityOptions,
} from '@proxy';
import { map } from 'rxjs';

export const DEFAULT_UTILITY_STANDARD_PRICE_ENTITY_PROPS =
  EntityProp.createMany<UtilityStandardPriceDto>([
    {
      type: ePropType.Boolean,
      name: 'isDeleted',
      displayName: 'Rental::IsDeleted',
      columnWidth: 100,
    },
    {
      type: ePropType.String,
      name: 'groupId',
      displayName: 'Rental::Group',
      columnWidth: 150,
      valueResolver: data =>
        data
          .getInjected(UtilityStandardPriceGroupService)
          .get(data.record.groupId)
          .pipe(map(res => res.name)),
    },
    {
      type: ePropType.Enum,
      name: 'utility',
      displayName: 'Rental::Utility',
      columnWidth: 100,
      enumList: rentalUtilityOptions,
    },
    {
      type: ePropType.Number,
      name: 'lowerBoundary',
      displayName: 'Rental::LowerBoundary',
      columnWidth: 80,
    },
    {
      type: ePropType.Number,
      name: 'price',
      displayName: 'Rental::Price',
      columnWidth: 100,
    },
    {
      type: ePropType.String,
      name: 'note',
      displayName: 'Rental::Note',
      columnWidth: 100,
    },
  ]);
