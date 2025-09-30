import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/pages/not-found/not-found.component';
import { InicioComponent } from '../inicio/pages/inicio/inicio.component';

const routes: Routes = [
  
  {
    path: '',
    component: InicioComponent,
    loadChildren: () => import('../inicio/inicio.module').then(m => m.InicioModule)
  },
  { component: NotFoundComponent, path: '**' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeWebRoutingModule { }
