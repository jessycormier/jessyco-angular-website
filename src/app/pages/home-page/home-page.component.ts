import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '@jc/content/content.service';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  latest: any;

  constructor(contentService: ContentService) {
    contentService.getLatest().subscribe((latest) => {
      this.latest = latest;
    });
  }
}
