import { Component, OnInit } from '@angular/core';
import { HeroesService } from './../../../services/heroes.service';
import { Heroe } from '../../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor(private _heroesService: HeroesService, private _router: Router
    , private activatedRouter: ActivatedRoute) {
      this.activatedRouter.params.subscribe( params => {
      this.termino = params['termino'];
      console.log(this.termino);
      this.heroes = this._heroesService.buscarHeroe(this.termino);
    });
  }

  ngOnInit() {
    // this.heroes = this._heroesService.getHeroes();
    // console.log(this.heroes.length);
    // console.log('prueba');
  }

  verHeroe( index: number ) {
    // _router.naviga
    this._router.navigate( [ './../heroe', index ] );
  }
}
