import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { BackToHomeButtonComponent } from '../../components/back-to-home-button/back-to-home-button.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-standard-layout',
  imports: [RouterOutlet, FooterComponent, BackToHomeButtonComponent],
  templateUrl: './standard-layout.component.html',
})
export class StandardLayoutComponent {
  isHomePage = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = this.router.url === '/';
      }
    });
  }
}
