import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JessyCormierComponent } from '../jessy-cormier/jessy-cormier.component';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [CommonModule, JessyCormierComponent, LogoComponent, RouterLink],
  templateUrl: './brand.component.html',
  styles: [],
})
export class BrandComponent {
  @Input() cssClasses = '';
  @Input() textCssClasses = '';
  @Input() showLogo = true;

  readonly bracketColorCss =
    'fill-blue-800 group-hover:fill-amber-500 group-focus:fill-amber-500 duration-700 group-hover:animate-pulse group-focus:animate-pulse';

  readonly letterColorCss = 'duration-75';
}
