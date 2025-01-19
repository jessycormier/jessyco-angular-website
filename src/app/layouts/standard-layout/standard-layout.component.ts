import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-standard-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './standard-layout.component.html',
})
export class StandardLayoutComponent {}
