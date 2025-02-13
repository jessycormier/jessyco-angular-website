import { Component } from '@angular/core';
import { BrandComponent } from '../brand/brand.component';
import { LinkComponent } from '../link/link.component';
import { LayoutService } from '@jc/services/layout.service';

@Component({
  selector: 'app-header',
  imports: [BrandComponent, LinkComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(public layout: LayoutService) {}
}
