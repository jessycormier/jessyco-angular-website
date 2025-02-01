import { Component } from '@angular/core';
import { WordComponent } from '../../components/word/word.component';
import { BackToHomeButtonComponent } from "../../components/back-to-home-button/back-to-home-button.component";

@Component({
  selector: 'app-resume-page',
  imports: [WordComponent, BackToHomeButtonComponent],
  templateUrl: './resume-page.component.html',
})
export class ResumePageComponent {}
