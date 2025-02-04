import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

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
