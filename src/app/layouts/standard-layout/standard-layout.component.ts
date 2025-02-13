import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@jc/components/footer/footer.component';
import { HeaderComponent } from '@jc/components/header/header.component';

@Component({
  selector: 'app-standard-layout',
  imports: [RouterOutlet, FooterComponent, CommonModule, HeaderComponent],
  templateUrl: './standard-layout.component.html',
})
export class StandardLayoutComponent {
  nowYear = new Date().getFullYear();

  constructor() {}
}
