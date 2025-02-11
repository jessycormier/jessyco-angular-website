import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { BackToHomeButtonComponent } from '../../components/back-to-home-button/back-to-home-button.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';

@Component({
  selector: 'app-standard-layout',
  imports: [RouterOutlet, FooterComponent, BackToHomeButtonComponent, CommonModule, HeaderComponent, SidebarComponent],
  templateUrl: './standard-layout.component.html',
})
export class StandardLayoutComponent {
  isHomePage = false;
  nowYear = new Date().getFullYear();
  isCurrentPage = false;
  navItems: {
    title: string;
    route: string;
    external?: boolean;
    ariaDetail?: string;
  }[] = [
    {
      title: 'Posts',
      route: '/posts',
      ariaDetail: 'My posts',
    },
    {
      title: 'RSS',
      route: '/rss.xml',
      external: true,
    },
  ];
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = this.router.url === '/';
      }
    });
  }
}
