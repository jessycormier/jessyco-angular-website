import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { BackToHomeButtonComponent } from '../../components/back-to-home-button/back-to-home-button.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-sidebar-layout',
  imports: [RouterOutlet, FooterComponent, BackToHomeButtonComponent, CommonModule, HeaderComponent, SidebarComponent],
  templateUrl: './sidebar-layout.component.html',
})
export class SidebarLayoutComponent {
  isHomePage = false;
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = this.router.url === '/';
      }
    });
  }
}
