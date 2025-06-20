import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ComponentState } from '@jc/component-state.enum';
import { ContentListItemComponent } from '@jc/components/content-list-item/content-list-item.component';
import { ContentService } from '@jc/content/services/content.service';
import { ContentListItem } from '@jc/content/interfaces/content-list-item.interface';
import { MetaTagsService } from '@jc/services/meta-tags.service';

@Component({
  selector: 'app-home-page',
  imports: [ContentListItemComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  ComponentState = ComponentState; // expose enum to html template.

  latestItems!: ContentListItem[];
  constructor(
    private contentService: ContentService,
    private metaTagsService: MetaTagsService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit() {
    // Only set home page meta tags on client-side (SSR handles them in resolver)
    if (isPlatformBrowser(this.platformId)) {
      this.metaTagsService.updateTags({
        title: 'Jessy.co - Developer, Builder, Learner',
        description: "Hi, I'm Jessy welcome to my website. I write about development, share thoughts, and document my journey building tools.",
        keywords: 'jessyco, jessy, developer, blog, portfolio, angular, typescript, web development',
        url: 'https://jessy.co/',
        type: 'website'
      });
    }

    this.contentService.getLatest().subscribe((contentItems) => (this.latestItems = contentItems));
  }
}
