import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { FestivalsComponent } from "./festivals.component";
import { FestivalStartComponent } from "./festival-start/festival-start.component";
import { FestivalEditComponent } from "./festival-edit/festival-edit.component";
import { FestivalDetailComponent } from "./festival-detail/festival-detail.component";



const festivalsRoute: Routes = [
    { path:'', component: FestivalsComponent,children:[
        { path:'', component: FestivalStartComponent },
        { path:'new', component: FestivalEditComponent },
        { path:':id', component: FestivalDetailComponent },
        { path:':id/edit', component: FestivalEditComponent }
    ]}
]

@NgModule({
    imports:[RouterModule.forChild(festivalsRoute)],
    exports:[RouterModule]
})
export class FestivalsRoutingModule{

}