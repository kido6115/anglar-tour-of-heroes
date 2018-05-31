import { Injectable } from '@angular/core';
import {Observable,of} from 'rxjs';
import { MessageService } from './message.service';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
private url='/api/hero';
constructor(private http:HttpClient,private messageService:MessageService) { }

  getHeroes():Observable<Hero[]>{
    this.messageService.add('HeroService:fetched heroes');
    // return of(HEROES);
    return this.http.get<Hero[]>(this.url);

  }
  getHero(id:number):Observable<Hero>{
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return this.http.get<Hero>(this.url+`/${id}`);
    // return of(HEROES.find(hero=>hero.id===id));
  }
  createHero(hero:Hero){
    return this.http.post<Hero>(this.url,hero);
  }
  updateHero(hero:Hero){
    return this.http.patch<Hero>(this.url,hero);
  }
  delteHero(id:number){
    return this.http.delete(this.url+`/${id}`);
  }
  
}
