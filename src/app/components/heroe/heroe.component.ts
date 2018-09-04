import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from './../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;

  constructor( private activatedRouter: ActivatedRoute
  , private _HeroesService: HeroesService ) {
    // console.log('constructor');
    this.activatedRouter.params.subscribe( params => {
      this.heroe = this._HeroesService.getHeroe(params['id']);
    });
  }

  ngOnInit() {
  }

}
