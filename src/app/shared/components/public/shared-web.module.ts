import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterWebComponent } from './footer-web/footer-web.component';
import { NavbarWebComponent } from './navbar-web/navbar-web.component';

@NgModule({
  declarations: [
    FooterWebComponent,
    NavbarWebComponent,
  ],
  imports: [
    CommonModule, NgbModule, RouterModule
  ],
  exports: [
    FooterWebComponent,
    NavbarWebComponent,
  ]
})
export class SharedWebModule { }


