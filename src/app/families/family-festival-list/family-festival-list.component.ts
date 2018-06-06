import { Component, OnInit} from '@angular/core';
import { Family } from '../../shared/family.model';
import { ActivatedRoute, Params } from '@angular/router';
import { FamilyService } from '../../shared/family.service';

@Component({
  selector: 'app-family-festival-list',
  templateUrl: './family-festival-list.component.html',
  styleUrls: ['./family-festival-list.component.css']
})
export class FamilyFestivalListComponent implements OnInit {
  family: Family;
  id: number;

  constructor(private familyService:FamilyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params 
        .subscribe(
          (params: Params)=>{
            this.id = +params['id'];
            this.family = this.familyService.getFamily(this.id);
            this.familyService.setFamilyId(this.id);
          }
        )
  }
}