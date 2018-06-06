import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { FamilyService } from "./family.service";
import { Family } from "./family.model";

@Injectable()
export class DataService {
    private URL = "https://angularapp-9052e.firebaseio.com/families.json";

    constructor(private http: HttpClient,
                private familyService: FamilyService) {
    }

    storeFamilies() {
        return this.http.put(this.URL,
            this.familyService.getFamilies());
    }

    fechtFamilies() {
        return this.http.get<Family[]>(this.URL)
            .subscribe(
                (families) => {
                    this.familyService.setFamilies(families);
                }
            );
    }
}