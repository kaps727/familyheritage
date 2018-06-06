import { Component, OnInit, Input } from '@angular/core';
import { Festival } from '../../shared/festival.model';
import { FamilyService } from '../../shared/family.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FestivalService } from '../../shared/festival.service';

@Component({
  selector: 'app-festival-detail',
  templateUrl: './festival-detail.component.html',
  styleUrls: ['./festival-detail.component.css']
})
export class FestivalDetailComponent implements OnInit {
  festival: Festival;
  id: number;
  
  constructor(private festivalService: FestivalService,
              private familyService: FamilyService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
        .subscribe(
          (params: Params)=> {
            this.id = +params['id'];
            this.festival =  this.festivalService.getFestival(this.id);
          }
        );
  }

  onEditFestival(){
    this.router.navigate(['edit'],{ relativeTo: this.route })
  }

  onDeleteFestival(){
    this.festivalService.deleteFestival(this.id);
  }
}
