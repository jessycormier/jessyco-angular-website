import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-moon-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './moon-icon.component.html',
  styles: [],
})
export class MoonIconComponent {
  @Input() colorClasses = 'text-gray-800 dark:text-gray-300';
  @Input() widthClasses = 'w-4 h-4';
}
