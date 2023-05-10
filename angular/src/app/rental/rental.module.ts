import { LazyModuleFactory } from '@abp/ng.core';
import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UtilityStandardPriceGroupComponent } from './components/utility-standard-price-groups/utility-standard-price-group.component';
import { UtilityStandardPriceComponent } from './components/utility-standard-prices/utility-standard-price.component';
import { RentalExtensionsGuard } from './guards/extensions.guard';
import { RentalRoutingModule } from './rental-routing.module';

const declarationsWithExports: Type<any>[] = [
  UtilityStandardPriceGroupComponent,
  UtilityStandardPriceComponent,
];

@NgModule({
  declarations: [...declarationsWithExports],
  exports: [...declarationsWithExports],
  imports: [SharedModule, RentalRoutingModule],
})
export class DormRentalModule {
  static forChild(): ModuleWithProviders<DormRentalModule> {
    return {
      ngModule: DormRentalModule,
      providers: [RentalExtensionsGuard],
    };
  }

  static forLazy(): LazyModuleFactory<DormRentalModule> {
    return new LazyModuleFactory(DormRentalModule.forChild());
  }
}
