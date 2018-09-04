import { Component, OnInit } from '@angular/core';
import { HeroesService } from './../../../services/heroes.service';
import { Heroe } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService, private _router: Router) {     
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe( index: number ) {
    // _router.naviga
    this._router.navigate( [ './../heroe', index ] );
  }
}
