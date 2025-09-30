import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeWebComponent } from './pages/home-web/home-web.component';
import { HomeWebRoutingModule } from './home-web-routing.module';
import { HttpPublicInterceptor } from 'src/app/core/interceptors/http-public.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedWebModule } from 'src/app/shared/components/public/shared-web.module';


@NgModule({
  declarations: [
    HomeWebComponent
  ],
  imports: [
    CommonModule,
    HomeWebRoutingModule,
    RouterModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    SharedWebModule,
    
  ],  
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpPublicInterceptor,
      multi: true
    },
  ],
})
export class HomeWebModule { }
