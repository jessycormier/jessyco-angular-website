import { Component, Input } from '@angular/core';
import { RouterLink, UrlTree } from '@angular/router';

@Component({
  selector: 'app-link',
  imports: [RouterLink],
  templateUrl: './link.component.html',
})
export class LinkComponent {
  @Input() link!: string | any[] | UrlTree | null | undefined;
  @Input() externalLink!: string;
}
