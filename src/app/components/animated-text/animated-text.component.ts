import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-animated-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animated-text.component.html',
})
export class AnimatedTextComponent {
  @Input() cssClasses = '';
  @Input() colorFrom = 'from-blue-500';
  @Input() colorVia = 'via-indigo-500';
  @Input() colorTo = 'to-amber-600';
}
