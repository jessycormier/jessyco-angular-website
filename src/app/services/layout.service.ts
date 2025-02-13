import { Injectable, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  mask = signal<boolean>(false);
  menu = signal<boolean>(false);

  breadcrumb: string[] = [];

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
        this.breadcrumb = event.url.split('/').filter((s) => s.length > 0);
        if (event.url === '/') {
          this.breadcrumb = ['home'];
        }
        this.closeMenu();
      }
    });
  }

  private splitAddDelimiter(str: string, delimiter: string) {
    const regex = new RegExp(`${delimiter}[^${delimiter}]+`, 'g');
    return str.match(regex) || [];
  }

  openMenu() {
    console.log('Open Menu');
    this.mask.set(true);
    this.menu.set(true);
  }

  closeMenu() {
    console.log('Close Menu');
    this.mask.set(false);
    this.menu.set(false);
  }

}
