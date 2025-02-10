import { HighlightService } from './../../word-highlight.service';
import { Component, effect, signal } from '@angular/core';
import { BackToHomeButtonComponent } from '../../../components/back-to-home-button/back-to-home-button.component';
import { ResumeWordComponent } from '../../resume-word/resume-word.component';
import { ToastComponent } from '../../../components/toast/toast.component';
import { LinkComponent } from "../../../components/link/link.component";

@Component({
  selector: 'app-resume-page',
  imports: [ResumeWordComponent, BackToHomeButtonComponent, ToastComponent, LinkComponent],
  templateUrl: './resume-page.component.html',
})
export class ResumePageComponent {

  constructor(public highlightService: HighlightService) {
  }

  onCloseClick() {
    this.highlightService.selectedWord.set(undefined);
  }
}
