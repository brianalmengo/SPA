import { Component, OnInit } from '@angular/core';
import { HeroesService } from './../../services/heroes.service';
import { Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService, private _router: Router) {
    // console.log('constructor');
  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    // console.log(this.heroes);
  }

  verHeroe( index: number ) {
    // _router.naviga
    this._router.navigate( [ '/heroe', index ] );
  }
}
