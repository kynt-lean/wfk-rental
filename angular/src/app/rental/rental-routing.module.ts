import {
  AuthGuard,
  PermissionGuard,
  ReplaceableComponents,
  ReplaceableRouteContainerComponent,
  RouterOutletComponent,
} from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { UtilityStandardPriceGroupComponent } from './components/utility-standard-price-groups/utility-standard-price-group.component';
import { UtilityStandardPriceComponent } from './components/utility-standard-prices/utility-standard-price.component';
import { eRentalComponents } from './enums/components.enum';
import { RentalExtensionsGuard } from './guards/extensions.guard';

const routes: Route[] = [
  { path: '', redirectTo: 'contracts', pathMatch: 'full' },
  {
    path: '',
    component: RouterOutletComponent,
    canActivate: [AuthGuard, PermissionGuard, RentalExtensionsGuard],
    children: [
      {
        path: 'utility-standard-price-groups',
        component: ReplaceableRouteContainerComponent,
        data: {
          replaceableComponent: {
            key: eRentalComponents.UtilityStandardPriceGroups,
            defaultComponent: UtilityStandardPriceGroupComponent,
          } as ReplaceableComponents.RouteData,
        },
      },
      {
        path: 'utility-standard-prices',
        component: ReplaceableRouteContainerComponent,
        data: {
          replaceableComponent: {
            key: eRentalComponents.UtilityStandardPriceGroups,
            defaultComponent: UtilityStandardPriceComponent,
          } as ReplaceableComponents.RouteData,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentalRoutingModule {}
