import { mapEnumToOptions } from '@abp/ng.core';

export enum RentalUtility {
  Apartment = 0,
  Electricity = 1,
  Water = 2,
  Internet = 3,
  NaturalGas = 4,
  Trash = 5,
}

export const rentalUtilityOptions = mapEnumToOptions(RentalUtility);
