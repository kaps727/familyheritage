import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";

import { FamiliesComponent } from "./families/families.component";

import { FestivalListComponent } from "./festivals/festival-list/festival-list.component";
import { FestivalsComponent } from "./festivals/festivals.component";

import { FestivalStartComponent } from "./festivals/festival-start/festival-start.component";
import { FamilyFestivalListComponent } from "./families/family-festival-list/family-festival-list.component";
import { FestivalDetailComponent } from "./festivals/festival-detail/festival-detail.component";
import { FestivalEditComponent } from "./festivals/festival-edit/festival-edit.component";
import { FamilyEditComponent } from "./families/family-edit/family-edit.component";
import { FestivalItemComponent } from "./festivals/festival-list/festival-item/festival-item.component";
import { FamilyStartComponent } from "./families/family-start/family-start.component";
import { HomeComponent } from "./core/home/home.component";




const appRoute: Routes = [
    { path:'', component: HomeComponent },
    { path:'families', loadChildren:'./families/families.module#FamiliesModule'},
    { path:'festivals', loadChildren:'./festivals/festivals.module#FestivalsModule'}
];

@NgModule({
    imports:[ RouterModule.forRoot(appRoute) ],
    exports:[ RouterModule ]
})
export class AppRoutingModule{
    
}