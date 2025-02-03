import { Component } from '@angular/core';
import { LinkComponent } from "../../components/link/link.component";

@Component({
  selector: 'app-test-page',
  imports: [LinkComponent],
  templateUrl: './test-page.component.html',
})
export class TestPageComponent {
  otherLinks = [
    {routerLink: '/error/404', text: '404'},
    {routerLink: '/error/418', text: '418'},
    {routerLink: '/error/500', text: '500'},
    {routerLink: '/error/not-found', text: 'client page not found'},
    {routerLink: '/error/client', text: 'client error'},
    {routerLink: '/some-2342342345256-link/', text: 'broken random link'},
  ];
}
