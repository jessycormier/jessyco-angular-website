import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-skip-to-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skip-to-main.component.html',
  styles: [
  ]
})
export class SkipToMainComponent {

  constructor(
    @Inject(DOCUMENT) private doc: Document
  ) { }

  focusMain(event: Event) {
    event?.preventDefault();
    this.doc?.querySelector('main')?.focus();
  }

}
