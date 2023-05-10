import { ConfigStateService } from '@abp/ng.core';
import {
  ExtensionsService,
  getObjectExtensionEntitiesFromStore,
  mapEntitiesToContributors,
  mergeWithDefaultActions,
  mergeWithDefaultProps,
} from '@abp/ng.theme.shared/extensions';
import { Injectable, Injector } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import {
  DEFAULT_RENTAL_CREATE_FORM_PROPS,
  DEFAULT_RENTAL_EDIT_FORM_PROPS,
  DEFAULT_RENTAL_ENTITY_ACTIONS,
  DEFAULT_RENTAL_ENTITY_PROPS,
  DEFAULT_RENTAL_TOOLBAR_ACTIONS,
} from '../default/default-rental.extensions';
import { eRentalComponents } from '../enums/components.enum';

@Injectable()
export class RentalExtensionsGuard implements CanActivate {
  constructor(protected readonly injector: Injector) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const extensions = this.injector.get(ExtensionsService);
    const configState = this.injector.get(ConfigStateService);
    return getObjectExtensionEntitiesFromStore(configState, 'Rental').pipe(
      map(entities => ({
        [eRentalComponents.UtilityStandardPriceGroups]: entities.UtilityStandardPriceGroups,
        [eRentalComponents.UtilityStandardPrices]: entities.UtilityStandardPrices,
      })),
      mapEntitiesToContributors(configState, 'Rental'),
      tap(objectExtensionContributors => {
        mergeWithDefaultActions(extensions.entityActions, DEFAULT_RENTAL_ENTITY_ACTIONS);
        mergeWithDefaultProps(
          extensions.entityProps,
          DEFAULT_RENTAL_ENTITY_PROPS,
          objectExtensionContributors.prop
        );
        mergeWithDefaultActions(extensions.toolbarActions, DEFAULT_RENTAL_TOOLBAR_ACTIONS);
        mergeWithDefaultProps(
          extensions.createFormProps,
          DEFAULT_RENTAL_CREATE_FORM_PROPS,
          objectExtensionContributors.createForm
        );
        mergeWithDefaultProps(
          extensions.editFormProps,
          DEFAULT_RENTAL_EDIT_FORM_PROPS,
          objectExtensionContributors.editForm
        );
      }),
      map(() => true)
    );
  }
}
