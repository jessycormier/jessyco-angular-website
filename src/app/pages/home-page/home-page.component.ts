import { Component } from '@angular/core';
import { LinkComponent } from "../../components/link/link.component";

@Component({
  selector: 'app-home-page',
  imports: [LinkComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {}
