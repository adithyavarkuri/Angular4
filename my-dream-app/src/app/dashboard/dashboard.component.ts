import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  heroesAll:any;
 
  constructor(private heroService: HeroService,private route: ActivatedRoute) {
   
   }
 
  ngOnInit() {
  this.route.data.subscribe((data: { detail: Hero }) => {
    // Load OrderDetail from Resolver into local object
    this.heroesAll = data;
    this.heroesAll.inputFiles.forEach(option => this.heroes.push(option));
  });

  }
 
  getHeroes(): void {
    this.heroService.getHeros()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}