import type {
  ExtensibleEntityDto,
  ExtensibleObject,
  PagedAndSortedResultRequestDto,
} from '@abp/ng.core';
import type { RentalUtility } from './rental-utility.enum';

export interface GetUtilityStandardPriceGroupsInput extends PagedAndSortedResultRequestDto {
  filter?: string;
}

export interface GetUtilityStandardPricesInput extends PagedAndSortedResultRequestDto {
  filter?: string;
  groupId?: string;
  utility?: RentalUtility;
  getEmpty?: boolean;
}

export interface UtilityStandardPriceCreateDto extends ExtensibleObject {
  groupId: string;
  utility: RentalUtility;
  lowerBoundary: number;
  price: number;
  note?: string;
}

export interface UtilityStandardPriceDto extends ExtensibleEntityDto<string> {
  groupId: string;
  utility: RentalUtility;
  lowerBoundary: number;
  price: number;
  note?: string;
  concurrencyStamp: string;
}

export interface UtilityStandardPriceGroupCreateDto extends ExtensibleObject {
  name: string;
  effectiveDate: string;
  note?: string;
}

export interface UtilityStandardPriceGroupDto extends ExtensibleEntityDto<string> {
  name: string;
  effectiveDate: string;
  note?: string;
  concurrencyStamp: string;
}

export interface UtilityStandardPriceGroupUpdateDto extends ExtensibleObject {
  name?: string;
  effectiveDate?: string;
  note?: string;
  concurrencyStamp: string;
}

export interface UtilityStandardPriceUpdateDto extends ExtensibleObject {
  groupId?: string;
  utility?: RentalUtility;
  lowerBoundary?: number;
  price?: number;
  note?: string;
  concurrencyStamp: string;
}
