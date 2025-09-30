import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product-service.service';

@Component({
  selector: 'app-navbar-web',
  templateUrl: './navbar-web.component.html',
  styleUrls: ['./navbar-web.component.scss']
})
export class NavbarWebComponent implements OnInit {

  toggleNavbar = true;
  
  constructor(private appService: ProductService,
    private router: Router,
    private ngZone: NgZone)
    { }

  ngOnInit(): void {
  }
}

