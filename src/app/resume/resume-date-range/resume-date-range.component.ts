import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resume-date-range',
  imports: [],
  templateUrl: './resume-date-range.component.html',
})
export class ResumeDateRangeComponent {
  @Input()
  start!: string;

  @Input()
  end!: string;
}
