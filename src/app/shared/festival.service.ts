import { Festival } from "./festival.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

export class FestivalService {
    festivalChanged = new Subject<Festival[]>();
    //familyIdChanged = new Subject<number>();

    private festivals: Festival[];
    private familyId: number;
    
    addFestivals(festivals: Festival[]) {
        this.festivals = [];
        this.festivals.push(...festivals);
        this.festivalChanged.next(this.festivals.slice());
    }

    getFestivals() {
        if (this.festivals !== undefined)
            return this.festivals.slice();
    }

    getFestival(index: number) {
        if (this.festivals)
            return this.festivals[index];
    }

    addFestival(festival: Festival) {
        this.festivals.push(festival);
        this.festivalChanged.next(this.festivals.slice());
    }

    updateFestival(index: number, newFestival: Festival) {
        this.festivals[index] = newFestival;
        this.festivalChanged.next(this.festivals.slice());
    }

    deleteFestival(index: number) {
        this.festivals.splice(index, 1);
        this.festivalChanged.next(this.festivals.slice());
    }

    setFamilyId(famId: number){
        this.familyId = famId;
        //this.familyIdChanged.next(this.familyId);
    }
    getFamilyId(){
        return this.familyId;
    }
    
}