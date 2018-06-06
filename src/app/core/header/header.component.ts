import { Component } from '@angular/core';
import { Response } from "@angular/http"
import { DataService } from '../../shared/data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor( private dataServie: DataService ) {} 

  onSaveData(){
    this.dataServie.storeFamilies()
        .subscribe(
          (response: Response) => {
            console.log(response);
          }
        );
  }

  onFetchData(){
    this.dataServie.fechtFamilies();
  }
}
