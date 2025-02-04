import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-jessy-cormier',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jessy-cormier.component.html',
})
export class JessyCormierComponent {
  @Input() cssClasses = '';
  @Input() showFullName = false;
}
