import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { FirstFeatureModule } from './features/first-feature/first-feature.module';

const routes: Routes = [
  {
    path: 'first-feature',
    loadChildren: () => import('./features/first-feature/first-feature.module').then(m => m.FirstFeatureModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        preloadingStrategy: PreloadAllModules,
        enableTracing: false
      }
    ),
    FirstFeatureModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
