import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  siteLinks = [
    { routerLink: '/', text: 'Home' },
    { routerLink: '/posts', text: 'Posts (old, temp)' },
    { routerLink: '/resume', text: 'Resume' }
  ];

  socialLinks = [
    { href: 'https://twitter.com/jessycormier', text: 'Twitter' },
    { href: 'https://linkedin.com/u/jessyco', text: 'LinkedIn' },
    { href: 'https://bsky.app/profile/jessy.co', text: 'Bluesky' },
    { href: 'https://github.com/jessycormier', text: 'GitHub' }
  ];

  otherLinks = [
    { href: '/error/404', text: '404' },
    { href: '/error/418', text: '418' },
    { href: '/error/500', text: '500' },
    { href: '/error/not-found', text: 'client page not found' },
    { href: '/error/client', text: 'client error' },
    { href: '/some-2342342345256-link/', text: 'broken random link' },

  ];
}
