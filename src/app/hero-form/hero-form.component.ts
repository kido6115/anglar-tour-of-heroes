import { Component, OnInit } from '@angular/core';
import { FormHero } from '../form-hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  powers: string[] = ['Smart', 'Raser Beam', 'Flexiable'];
  model: FormHero = new FormHero(18, 'Dr IQ', this.powers[2], 'Chuck Overstreet');
  submitted:boolean=false;
  onSubmit():void{
    this.submitted=true;
  }
  get diagnostic() { return JSON.stringify(this.model); }
  constructor() { }
  newHero() {
    this.model = new FormHero(42, '', '');
  }
  ngOnInit() {
  }

}
