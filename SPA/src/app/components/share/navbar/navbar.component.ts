import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private _routes: Router ) {


  }

  ngOnInit() {
  }

  private buscarHeroe( termino: string) {
      console.log(termino);
      this._routes.navigate( ['/search', termino ] );
  }
}
