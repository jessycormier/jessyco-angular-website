import { Component, effect, HostBinding, HostListener, Input } from '@angular/core';
import { HighlightService } from '../word-highlight.service';

@Component({
  selector: 'app-resume-word',
  templateUrl: './resume-word.component.html',
})
export class ResumeWordComponent {
  @Input() value?: string;

  @Input()
  @HostBinding('class.underline')
  underline = true;

  @HostBinding('class.highlight')
  highlight = false;

  @HostListener('mouseup', ['$event'])
  onMouseUp(e: Event) {
    e.preventDefault();
    this.highlightService.selectedWord.set(this.highlightService.selectedWord() === this.value ? undefined : this.value);
  }

  constructor(private highlightService: HighlightService) {
    effect(() => {
      this.highlight = this.highlightService.selectedWord() === this.value;
    });
  }
}
