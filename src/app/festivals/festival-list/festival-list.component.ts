import { Component, OnInit, OnDestroy } from '@angular/core';
import { FamilyService } from '../../shared/family.service';
import { ActivatedRoute, Params, RouterModule, Router } from '@angular/router';
import { Festival } from '../../shared/festival.model';
import { FestivalService } from '../../shared/festival.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-festival-list',
  templateUrl: './festival-list.component.html',
  styleUrls: ['./festival-list.component.css']
})
export class FestivalListComponent implements OnInit , OnDestroy {
  private substricption = Subscription;
  festivals: Festival[];
  id: number;

  constructor(private festivalService:FestivalService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
     this.festivalService.festivalChanged
          .subscribe(
            (festivals:Festival[])=>{
              this.festivals = festivals;
          }
      );
   this.festivals =  this.festivalService.getFestivals();
  }

  onNewFestival(){
     this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy(){
    this.festivalService.festivalChanged.unsubscribe();
  }
}
