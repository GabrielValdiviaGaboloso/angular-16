import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeWebComponent } from './public/home/pages/home-web/home-web.component';

const routes: Routes = [
  {
    path: '', //TODO (publico)
    component: HomeWebComponent,
    loadChildren: () => import('./public/home/home-web.module').then((m) => m.HomeWebModule),
  },

  { path: '**', redirectTo: '' },
  { path: '', pathMatch: 'full', redirectTo: '' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: false, scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
