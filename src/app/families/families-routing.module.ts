import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FamiliesComponent } from "./families.component";
import { FamilyStartComponent } from "./family-start/family-start.component";
import { FamilyEditComponent } from "./family-edit/family-edit.component";
import { FamilyFestivalListComponent } from "./family-festival-list/family-festival-list.component";

const familiesRoute: Routes = [
    { path:'', component: FamiliesComponent, children:[
        { path:'', component: FamilyStartComponent },
        { path:'new', component: FamilyEditComponent },
        { path:':id', component: FamilyFestivalListComponent }
    ]},
];

@NgModule({
    imports:[RouterModule.forChild(familiesRoute)],
    exports:[RouterModule]
})
export class FamiliesRoutingMoudule{

}