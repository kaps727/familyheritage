import { Component, Input } from '@angular/core';
import { Family } from '../../../shared/family.model';

@Component({
  selector: 'app-family-item',
  templateUrl: './family-item.component.html',
  styleUrls: ['./family-item.component.css']
})
export class FamilyItemComponent {
  @Input() family: Family;
  @Input() idx: number;
}
