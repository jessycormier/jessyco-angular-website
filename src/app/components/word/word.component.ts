import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-word',
  imports: [],
  templateUrl: './word.component.html',
})
export class WordComponent {
  @Input() value?: string;
}
