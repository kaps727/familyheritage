import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FamilyService } from '../../shared/family.service';
import { Family } from '../../shared/family.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FestivalService } from '../../shared/festival.service';
import { Festival } from '../../shared/festival.model';

@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.component.html',
  styleUrls: ['./family-list.component.css']
})
export class FamilyListComponent implements OnInit ,OnDestroy {
  families: Family[];
  id:number;

  constructor(private familyService: FamilyService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.familyService.familiesChanged
        .subscribe(
          (families: Family[])=>{
            this.families = families;
          }
        );
    this.families = this.familyService.getFamilies();
  }

  onNewFamily(){
   this.router.navigate(['new'],{ relativeTo: this.route });
  }

  ngOnDestroy(){
    this.familyService.familiesChanged.unsubscribe();
  }
}
