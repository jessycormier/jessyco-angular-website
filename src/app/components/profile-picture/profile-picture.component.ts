import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageHoverComponent } from '../image-hover/image-hover.component';

@Component({
  selector: 'app-profile-picture',
  standalone: true,
  imports: [
    CommonModule,
    ImageHoverComponent
  ],
  templateUrl: './profile-picture.component.html',
  styles: [`
    .profile-picture {
      width: 300px;
      height: 400px;
      max-height: 400px;
      max-width: 300px;
      min-width: 300px;
      min-height: 400px;
    }
`]
})
export class ProfilePictureComponent {

}
