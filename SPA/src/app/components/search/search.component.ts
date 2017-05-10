import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe} from '../../services/heroes.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private heroes: Heroe [];

  constructor( private service: HeroesService,
               private activateRoute: ActivatedRoute,
               private router: Router
              ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe( params => {
      this.heroes = this.service.buscarHeroes( params['term'] )
    });
  }

  verHeroe( idx: number ) {
    console.log(idx);
    this.router.navigate( ['/heroe',idx, true] );
  }

}
