import { Component, Input } from '@angular/core';
import { Festival } from '../../../shared/festival.model';

@Component({
  selector: 'app-festival-item',
  templateUrl: './festival-item.component.html',
  styleUrls: ['./festival-item.component.css']
})
export class FestivalItemComponent {
  @Input() festival: Festival;
  @Input() idx: number;
}
