import { Component } from '@angular/core';
import { ResumeWordComponent } from "../resume-word/resume-word.component";
import { LinkComponent } from "../../components/link/link.component";

@Component({
  selector: 'app-resume-help-section',
  imports: [ResumeWordComponent, LinkComponent],
  templateUrl: './resume-help-section.component.html'
})
export class ResumeHelpSectionComponent {

}
