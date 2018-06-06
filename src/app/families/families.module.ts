import { NgModule } from "@angular/core";

import { FamiliesComponent } from "./families.component";
import { FamilyListComponent } from "./family-list/family-list.component";
import { FamilyFestivalDetailComponent } from "./family-festival-list/family-festival-detail/family-festival-detail.component";
import { FamilyEditComponent } from "./family-edit/family-edit.component";
import { FamilyItemComponent } from "./family-list/family-item/family-item.component";
import { FamilyFestivalListComponent } from "./family-festival-list/family-festival-list.component";
import { FamilyStartComponent } from "./family-start/family-start.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FamiliesRoutingMoudule } from "./families-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations:[
        FamiliesComponent,
        FamilyListComponent,
        FamilyFestivalDetailComponent,
        FamilyEditComponent,
        FamilyItemComponent,
        FamilyFestivalListComponent,
        FamilyStartComponent,
    ],
    imports:[
        SharedModule,
        FamiliesRoutingMoudule
    ],
    
})
export class FamiliesModule{

}