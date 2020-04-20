import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FirstFeatureRoutingModule} from './first-feature-routing.module';
import {FirstFeatureComponent} from './first-feature.component';
import {FirstSubComponentComponent} from "./first-sub-component/first-sub-component.component";

@NgModule({
  imports: [
    CommonModule,
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
