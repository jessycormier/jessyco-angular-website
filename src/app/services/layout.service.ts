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
        this.breadcrumb = event.url.split('/').filter((s) => s.length > 0);
        if (event.url === '/') {
          this.breadcrumb = ['home'];
        }

        // Split out the last item for now for visual reasons.
        // I may want to create slots for each visual part so I can better
        // control what shows on different screen sizes..
        if (this.breadcrumb.length === 2) {
          this.breadcrumb = this.breadcrumb.slice(0, 1);
        }

        if (this.menu()) {
          this.closeMenu();
        }
      }
    });
  }

  private splitAddDelimiter(str: string, delimiter: string) {
    const regex = new RegExp(`${delimiter}[^${delimiter}]+`, 'g');
    return str.match(regex) || [];
  }

  openMenu() {
    this.mask.set(true);
    this.menu.set(true);
  }

  closeMenu() {
    this.mask.set(false);
    this.menu.set(false);
  }
}
