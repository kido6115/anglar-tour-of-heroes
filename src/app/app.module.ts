import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClickMeComponent } from './event/click-me.component';
import { LoopbackComponent } from './event/loop-back.component';
import { EnterComponent } from './event/enter.component';
import { BlurComponent } from './event/blur.component';
import { CombineComponent } from './event/combine.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HttpClientModule } from '@angular/common/http';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { UpdateHeroComponent } from './update-hero/update-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    ClickMeComponent,
    LoopbackComponent,
    EnterComponent,
    BlurComponent,
    CombineComponent,
    HeroFormComponent,
    AddHeroComponent,
    UpdateHeroComponent,
  ],
  imports: [
    BrowserModule,FormsModule, AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
