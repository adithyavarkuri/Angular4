import { Component, OnInit } from '@angular/core';
import { Hero  } from './hero';
import { HeroService } from '../hero.service'
//import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  singlehero : Hero ={
    id :1,
    name : 'adithya'
  };

  
  //listHeroes = HEROES;
  listHeroes : Hero[];

  selectedHero: Hero 
  //onSelect(onehero: Hero): void {
  //this.selectedHero = onehero;
//}
 

  constructor(private heroService : HeroService) { }

  //getHeroes() :void {
  //  this.listHeroes = this.heroService.getHeros();
  //}
  getHeroes(): void {
    this.heroService.getHeros()
        .subscribe(heroes => this.listHeroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

}
