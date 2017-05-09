import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:Heroe;

  constructor( private activateRoute: ActivatedRoute,
               private _heroesService: HeroesService
  ) {
    this.activateRoute.params.subscribe( params =>{
      console.log( params['id'] );
      this.heroe = this._heroesService.getHeroe( params['id'] );

    })
  }

  ngOnInit() {
  }

}
