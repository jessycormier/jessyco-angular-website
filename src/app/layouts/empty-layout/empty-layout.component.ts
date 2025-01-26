import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-empty-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './empty-layout.component.html',
})
export class EmptyLayoutComponent {

}
