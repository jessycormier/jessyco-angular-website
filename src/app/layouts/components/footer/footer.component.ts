import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {LinkComponent} from '../../../components/link/link.component';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, LinkComponent],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  siteLinks = [
    {routerLink: '/', text: 'Home'},
    {routerLink: '/test', text: 'Test Page'},
    {routerLink: '/resume', text: 'Resume'},
  ];

  socialLinks = [
    {href: 'https://twitter.com/jessycormier', text: 'Twitter'},
    {href: 'https://linkedin.com/u/jessyco', text: 'LinkedIn'},
    {href: 'https://bsky.app/profile/jessy.co', text: 'Bluesky'},
    {href: 'https://github.com/jessycormier', text: 'GitHub'},
  ];

}
