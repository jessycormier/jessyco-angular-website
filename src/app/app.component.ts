import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkipToMainComponent } from './components/skip-to-main/skip-to-main.component';
import { LayoutService } from './services/layout.service';
import { MaskComponent } from './components/mask/mask.component';
import { MenuComponent } from "./components/menu/menu.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SkipToMainComponent, MaskComponent, MenuComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(public layout: LayoutService) {}
}
