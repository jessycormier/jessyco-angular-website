import { RouterLink, UrlTree } from '@angular/router';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-link',
  imports: [RouterLink],
  templateUrl: './link.component.html',
  styleUrls: ['./link.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class LinkComponent {
  @Input() link!: string | any[] | UrlTree | null | undefined;
  @Input() externalLink!: string;
}
