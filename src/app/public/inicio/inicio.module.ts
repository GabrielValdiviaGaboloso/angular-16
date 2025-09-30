import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';
import { ModalProductoComponent } from './components/modal-producto/modal-producto.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InicioComponent,
    ProductDashboardComponent,
    ModalProductoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbPaginationModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
