import { ABP } from '@abp/ng.core';
import { ePropType, FormProp } from '@abp/ng.theme.shared/extensions';
import {
  rentalUtilityOptions,
  UtilityStandardPriceDto,
  UtilityStandardPriceGroupDto,
  UtilityStandardPriceGroupService,
} from '@proxy';
import { map, of } from 'rxjs';

export const DEFAULT_UTILITY_STANDARD_PRICE_FORM_PROPS =
  FormProp.createMany<UtilityStandardPriceDto>([
    {
      type: ePropType.Typeahead,
      name: 'groupId',
      displayName: 'Rental::Group',
      defaultValue: 0,
      options: (data, aux) =>
        data
          .getInjected(UtilityStandardPriceGroupService)
          .getList({ maxResultCount: 10, filter: aux })
          .pipe(
            map(res =>
              (res.items || []).map(
                item =>
                  <ABP.Option<UtilityStandardPriceGroupDto>>{
                    key: item.name,
                    value: item.id,
                  }
              )
            )
          ),
    },
    {
      type: ePropType.Enum,
      name: 'utility',
      displayName: 'Rental::Utility',
      defaultValue: 0,
      options: _ => of(rentalUtilityOptions),
    },
    {
      type: ePropType.Number,
      name: 'lowerBoundary',
      displayName: 'Rental::LowerBoundary',
      defaultValue: 0,
    },
    {
      type: ePropType.Number,
      name: 'price',
      displayName: 'Rental::Price',
      defaultValue: 0,
    },
    {
      type: ePropType.Text,
      name: 'note',
      displayName: 'Rental::Note',
    },
    {
      type: ePropType.String,
      name: 'groupId',
      visible: () => false,
    },
    {
      type: ePropType.Enum,
      name: 'utility',
      visible: () => false,
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
