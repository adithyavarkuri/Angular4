import { Component, OnInit } from '@angular/core';
import { FormHero }from '../form-hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  constructor() { }

  
  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

//model = new FormHero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
model : FormHero ={
  id :1,
  name : 'adithya',
  power:this.powers[1],
  alterEgo : 'Chuck Overstreet'

};
submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
  ngOnInit() {
  }
}
