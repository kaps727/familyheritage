import { Injectable } from "@angular/core";
import { Family } from "./family.model";
import { Tradition } from "../shared/tradition.model";
import { Festival } from "./festival.model";
import { FestivalService } from "./festival.service";
import { Subject } from "rxjs";

@Injectable()
export class FamilyService {
    familiesChanged = new Subject<Family[]>();
    
    familyId:number;

     private families: Family[] = [];

    constructor(private festivalService: FestivalService) { }

    getFamily(index: number) {
        return this.families[index];
    }
    getFamilies() {
        return this.families.slice();
    }
    setFamilies(families: Family[]) {
        this.families = families
        this.familiesChanged.next(this.families.slice());
    }
    showFestivals(festivals: Festival[]) {
        this.festivalService.addFestivals(festivals);
    }
    setFamilyId(famId: number){
        this.festivalService.setFamilyId(famId);
    }
    addFestival(famId:number, festivals:Festival[]){
         this.families[famId].festivals = [];
         this.families[famId].festivals.push(...festivals);
         this.familiesChanged.next(this.families.slice());
    }

    updateFestival(famId:number, festivals:Festival[]){
        this.families[famId].festivals = [];
        this.families[famId].festivals.push(...festivals);
        this.familiesChanged.next(this.families.slice());
    }

}
