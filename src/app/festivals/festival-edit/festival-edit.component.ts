import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FestivalService } from '../../shared/festival.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Festival } from '../../shared/festival.model';
import { FamilyService } from '../../shared/family.service';

@Component({
  selector: 'app-festival-edit',
  templateUrl: './festival-edit.component.html',
  styleUrls: ['./festival-edit.component.css']
})
export class FestivalEditComponent implements OnInit {
  id: number;
  editMode = false;
  famId:number;

  festivalForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private festivalService: FestivalService,
              private familyService: FamilyService) {}


  get festForm() { return <FormArray>this.festivalForm.get('traditions'); }

  ngOnInit() {
    this.famId = this.festivalService.getFamilyId();
    this.route.params
      .subscribe(
        (params: Params) => {
         // console.log()
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  private initForm() {

    let fesName = '';
    let fesDescription = '';
    let fesImagePath = '';
    let fesTraditions = new FormArray([]);

    if (this.editMode) {
      const festival: Festival = this.festivalService.getFestival(this.id);
      if (festival) {
        fesName = festival.name;
        fesDescription = festival.description;
        fesImagePath = festival.imagePath;
        if (festival['traditions']) {
          for (let tradition of festival.traditions) {
            fesTraditions.push(new FormGroup({
              'description': new FormControl(tradition.description, Validators.required),
              'rituals': new FormControl(tradition.rituals, Validators.required)
            }))
          }
        }
      }
    }

    this.festivalForm = new FormGroup({
      'name': new FormControl(fesName, Validators.required),
      'imagePath': new FormControl(fesImagePath, Validators.required),
      'description': new FormControl(fesDescription, Validators.required),
      'traditions': fesTraditions
    })

  }

  onSubmit() {
    const newFestival:Festival = new Festival(
       this.festivalForm.value['name'],
       this.festivalForm.value['description'],
       this.festivalForm.value['imagePath'],
       this.festivalForm.value['traditions']
    );

    if(this.editMode){
      this.festivalService.updateFestival(this.id, newFestival);
      this.familyService.updateFestival(this.famId,this.festivalService.getFestivals());
    }else{
      this.festivalService.addFestival(newFestival);
      this.familyService.addFestival(this.famId,this.festivalService.getFestivals());
    }
  }

  onAddTradition() {
    (<FormArray>this.festivalForm.get('traditions')).push(new FormGroup({
      'description': new FormControl(null, Validators.required),
      'rituals': new FormControl(null, Validators.required)
    }));
  }


  

}