import { ModuleWithProviders, NgModule } from '@angular/core';
import { RENTAL_ROUTE_PROVIDERS } from './providers/route.providers';

@NgModule()
export class RentalConfigModule {
  static forRoot(): ModuleWithProviders<RentalConfigModule> {
    return {
      ngModule: RentalConfigModule,
      providers: [RENTAL_ROUTE_PROVIDERS],
    };
  }
}
