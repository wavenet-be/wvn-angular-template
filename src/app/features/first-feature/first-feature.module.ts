import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';

import { FirstFeatureRoutingModule } from './first-feature-routing.module';
import { FirstFeatureComponent } from './first-feature.component';
import { FirstSubComponentComponent } from './first-sub-component/first-sub-component.component';

@NgModule({
  imports: [
    // Angular modules
    FormsModule,

    // PrimeNG modules

    // App modules
    SharedModule,

    // Routing modules
    FirstFeatureRoutingModule
  ],
  declarations: [
    FirstFeatureComponent,
    FirstSubComponentComponent
  ],
  providers: []
})
export class FirstFeatureModule {
}
