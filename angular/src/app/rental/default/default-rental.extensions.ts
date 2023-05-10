import { EntityActionDefaults } from '@abp/ng.theme.shared/extensions/lib/models/entity-actions';
import { EntityPropDefaults } from '@abp/ng.theme.shared/extensions/lib/models/entity-props';
import {
  CreateFormPropDefaults,
  EditFormPropDefaults,
} from '@abp/ng.theme.shared/extensions/lib/models/form-props';
import { ToolbarActionDefaults } from '@abp/ng.theme.shared/extensions/lib/models/toolbar-actions';
import { eRentalComponents } from '../enums/components.enum';
import { DEFAULT_UTILITY_STANDARD_PRICE_GROUP_ENTITY_ACTIONS } from './utility-standard-price-groups/default-utility-standard-price-group-entity-actions';
import { DEFAULT_UTILITY_STANDARD_PRICE_GROUP_ENTITY_PROPS } from './utility-standard-price-groups/default-utility-standard-price-group-entity-props';
import { DEFAULT_UTILITY_STANDARD_PRICE_GROUP_FORM_PROPS } from './utility-standard-price-groups/default-utility-standard-price-group-form-props';
import { DEFAULT_UTILITY_STANDARD_PRICE_GROUP_TOOLBAR_ACTIONS } from './utility-standard-price-groups/default-utility-standard-price-group-toolbar-actions';
import { DEFAULT_UTILITY_STANDARD_PRICE_ENTITY_ACTIONS } from './utility-standard-prices/default-utility-standard-price-entity-actions';
import { DEFAULT_UTILITY_STANDARD_PRICE_ENTITY_PROPS } from './utility-standard-prices/default-utility-standard-price-entity-props';
import { DEFAULT_UTILITY_STANDARD_PRICE_FORM_PROPS } from './utility-standard-prices/default-utility-standard-price-form-props';
import { DEFAULT_UTILITY_STANDARD_PRICE_TOOLBAR_ACTIONS } from './utility-standard-prices/default-utility-standard-price-toolbar-actions';

export const DEFAULT_RENTAL_ENTITY_ACTIONS: EntityActionDefaults = {
  [eRentalComponents.UtilityStandardPriceGroups]:
    DEFAULT_UTILITY_STANDARD_PRICE_GROUP_ENTITY_ACTIONS,
  [eRentalComponents.UtilityStandardPrices]: DEFAULT_UTILITY_STANDARD_PRICE_ENTITY_ACTIONS,
};

export const DEFAULT_RENTAL_ENTITY_PROPS: EntityPropDefaults = {
  [eRentalComponents.UtilityStandardPriceGroups]: DEFAULT_UTILITY_STANDARD_PRICE_GROUP_ENTITY_PROPS,
  [eRentalComponents.UtilityStandardPrices]: DEFAULT_UTILITY_STANDARD_PRICE_ENTITY_PROPS,
};

export const DEFAULT_RENTAL_TOOLBAR_ACTIONS: ToolbarActionDefaults = {
  [eRentalComponents.UtilityStandardPriceGroups]:
    DEFAULT_UTILITY_STANDARD_PRICE_GROUP_TOOLBAR_ACTIONS,
  [eRentalComponents.UtilityStandardPrices]: DEFAULT_UTILITY_STANDARD_PRICE_TOOLBAR_ACTIONS,
};

export const DEFAULT_RENTAL_CREATE_FORM_PROPS: CreateFormPropDefaults = {
  [eRentalComponents.UtilityStandardPriceGroups]: DEFAULT_UTILITY_STANDARD_PRICE_GROUP_FORM_PROPS,
  [eRentalComponents.UtilityStandardPrices]: DEFAULT_UTILITY_STANDARD_PRICE_FORM_PROPS,
};

export const DEFAULT_RENTAL_EDIT_FORM_PROPS: EditFormPropDefaults = {
  [eRentalComponents.UtilityStandardPriceGroups]: DEFAULT_UTILITY_STANDARD_PRICE_GROUP_FORM_PROPS,
  [eRentalComponents.UtilityStandardPrices]: DEFAULT_UTILITY_STANDARD_PRICE_FORM_PROPS,
};
