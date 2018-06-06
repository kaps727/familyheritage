import { NgModule } from "@angular/core";

import { FestivalListComponent } from "./festival-list/festival-list.component";
import { FestivalEditComponent } from "./festival-edit/festival-edit.component";
import { FestivalStartComponent } from "./festival-start/festival-start.component";
import { FestivalsComponent } from "./festivals.component";
import { FestivalDetailComponent } from "./festival-detail/festival-detail.component";
import { FestivalItemComponent } from "./festival-list/festival-item/festival-item.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { FamiliesRoutingMoudule } from "../families/families-routing.module";
import { FestivalsRoutingModule } from "./festivals-routing.module";


@NgModule({
    declarations:[
        FestivalListComponent,
        FestivalEditComponent,
        FestivalStartComponent,
        FestivalsComponent,
        FestivalDetailComponent,
        FestivalItemComponent,
    ],
    imports:[
        SharedModule,
        ReactiveFormsModule,
        FestivalsRoutingModule
    ]
})
export class FestivalsModule{

}