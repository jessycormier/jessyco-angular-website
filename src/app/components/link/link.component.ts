import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, UrlTree } from '@angular/router';

@Component({
  selector: 'app-link',
  imports: [RouterLink, CommonModule],
  templateUrl: './link.component.html',
})
export class LinkComponent {
  @Input() routerLink!: string | any[] | UrlTree | null | undefined;
  @Input() href!: string;
}
