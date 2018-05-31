import { Component, OnInit,Input } from '@angular/core';
import { Hero } from '../hero';
import {Location} from '@angular/common';
import { HeroService } from '../service/hero.service';
@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {

  hero:Hero=new Hero();
  constructor(
    private heroService:HeroService,
    private location:Location
  ) { }
  createHero():void{
    this.heroService.createHero(this.hero).subscribe(data => {
      alert("Hero created successfully.");
      this.location.back();
    });
  }
  ngOnInit() {
    
  }

}
