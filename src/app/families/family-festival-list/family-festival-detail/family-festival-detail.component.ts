import { Component, Input } from '@angular/core';
import { Festival } from '../../../shared/festival.model';
import { FamilyService } from '../../../shared/family.service';
import { Family } from '../../../shared/family.model';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-family-festival-detail',
  templateUrl: './family-festival-detail.component.html',
  styleUrls: ['./family-festival-detail.component.css']
})
export class FamilyFestivalDetailComponent{
  @Input() festivals: Festival[];
  @Input() familyId: number;

  constructor(  private familyService: FamilyService,
                private router: Router) { }

  onEditFestivals() {
    const family: Family = this.familyService.getFamily(this.familyId);
    this.familyService.showFestivals(family.festivals);
    
    this.router.navigate(['festivals']);
  }
}