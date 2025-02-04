import { Component } from '@angular/core';
import { BrandComponent } from "../../../components/brand/brand.component";
import { LinkComponent } from "../../../components/link/link.component";

@Component({
  selector: 'app-header',
  imports: [BrandComponent, LinkComponent],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

}
