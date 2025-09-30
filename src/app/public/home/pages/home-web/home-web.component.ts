import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-web',
  templateUrl: './home-web.component.html',
  styleUrls: ['./home-web.component.scss']
})
export class HomeWebComponent implements OnInit {
  loginDisplay = false;

  constructor(
    private router: Router) { }

  ngOnInit(): void {

  }

}
