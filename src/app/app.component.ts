import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkipToMainComponent } from './components/skip-to-main/skip-to-main.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SkipToMainComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
