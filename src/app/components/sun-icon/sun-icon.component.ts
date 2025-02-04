import {CommonModule} from '@angular/common';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-sun-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sun-icon.component.html',
  styles: [],
})
export class SunIconComponent {
  @Input() colorClasses = 'text-gray-800';
  @Input() widthClasses = 'w-4 h-4';
}
