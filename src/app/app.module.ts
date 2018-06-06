import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http' 

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './core/home/home.component';
import { FamiliesModule } from './families/families.module';
import { FestivalsModule } from './festivals/festivals.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { FamilyService } from "./shared/family.service";
import { FestivalService } from "./shared/festival.service";
import { DataService } from "./shared/data.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers:[ FamilyService, FestivalService, DataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
