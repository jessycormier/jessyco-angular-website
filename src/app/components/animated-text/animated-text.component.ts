import { Component, Host, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

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
