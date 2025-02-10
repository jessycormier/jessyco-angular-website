import { Component } from '@angular/core';
import { BackToHomeButtonComponent } from '../../../components/back-to-home-button/back-to-home-button.component';
import { ResumeWordComponent } from '../../resume-word/resume-word.component';

@Component({
  selector: 'app-resume-page',
  imports: [ResumeWordComponent, BackToHomeButtonComponent],
  templateUrl: './resume-page.component.html',
})
export class ResumePageComponent {}
