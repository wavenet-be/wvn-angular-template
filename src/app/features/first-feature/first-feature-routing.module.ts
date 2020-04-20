import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FirstFeatureComponent} from "./first-feature.component";
import {FirstSubComponentComponent} from "./first-sub-component/first-sub-component.component";
import {AuthenticationGuard} from "@wavenet/ngx-wvn-core";

const routes: Routes = [
  {
    path: '',
    component: FirstFeatureComponent
  },
  {
    path: 'first-sub',
    component: FirstSubComponentComponent,
    canLoad: [AuthenticationGuard],
    canActivate: [AuthenticationGuard],
    data: {
      roles: ['EXAMPLE_ROLE']
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstFeatureRoutingModule {
}
