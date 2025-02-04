import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo.component.html',
})
export class LogoComponent {
  @Input() svgClasses: string = '';

  /**
   * Left bracket classes
   */
  @Input() lbClasses: string = '';

  /**
   * Letter j classes
   */
  @Input() jClasses: string = '';

  /**
   * Letter c classes
   */
  @Input() cClasses: string = '';

  /**
   * Right bracket classes
   */
  @Input() rbClasses: string = '';
}
