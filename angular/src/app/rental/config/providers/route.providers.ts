import { eLayoutType, RoutesService } from '@abp/ng.core';
import { APP_INITIALIZER, Provider } from '@angular/core';
import { eRentalRouteNames } from '../enums/route-names.enum';

export const RENTAL_ROUTE_PROVIDERS: Provider[] = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

function configureRoutes(routes: RoutesService) {
  return () => {
    routes.add([
      {
        path: '/rental',
        name: eRentalRouteNames.RentalManagement,
        order: 2,
        iconClass: 'fas fa-building',
        layout: eLayoutType.application,
      },
      {
        path: '/rental/utility-standard-price-groups',
        name: eRentalRouteNames.UtilityStandardPriceGroups,
        parentName: eRentalRouteNames.RentalManagement,
        order: 1,
        iconClass: 'fas fa-file-invoice-dollar',
      },
      {
        path: '/rental/utility-standard-prices',
        name: eRentalRouteNames.UtilityStandardPrices,
        parentName: eRentalRouteNames.RentalManagement,
        order: 2,
        iconClass: 'fas fa-dollar-sign',
      },
    ]);
  };
}
