import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-hover',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-hover.component.html'
})
export class ImageHoverComponent {
  @Input() title!: string;
  @Input() text!: string;
  @Input() rounded = false;
  @Input() showDetails = true;
}
