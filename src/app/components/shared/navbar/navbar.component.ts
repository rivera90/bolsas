import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  bandera:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  busqueda(){
    this.bandera= true;
  }
}
