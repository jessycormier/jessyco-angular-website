import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ContentCategory } from '@jc/content/content-category.enum';
import { Content } from '@jc/content/interfaces/content.interface';
import { MetaTagsService } from '@jc/services/meta-tags.service';
import { MarkdownModule } from 'ngx-markdown';
import { LinkComponent } from '../../../components/link/link.component';

@Component({
  imports: [MarkdownModule, RouterLink, LinkComponent],
  templateUrl: './content-page.component.html',
})
export class ContentPageComponent {
  data!: Content;
  id!: string;
  date!: string;
  title!: string;
  category!: ContentCategory;
  aiEditor = false;
  markdown!: string;

  constructor(
    private route: ActivatedRoute,
    private metaTagsService: MetaTagsService,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {
    this.route.data.subscribe((data) => {
      this.data = data['content'] as Content;

      // Add null checks to prevent errors during SSR prerendering
      if (this.data && this.data.frontmatter) {
        this.id = this.data.frontmatter.id;
        this.date = this.data.frontmatter.date;
        this.title = this.data.frontmatter.title;
        this.category = this.data.frontmatter.category;
        this.aiEditor = this.data.frontmatter.aiEditor ?? false;
        this.markdown = this.data.markdown;

        // Only update meta tags on client-side (SSR handles them in resolver)
        if (isPlatformBrowser(this.platformId)) {
          // Update meta tags for this content
          const metaConfig = this.metaTagsService.generateContentMetaTags(this.data.frontmatter, this.data.markdown);

          // Override with any custom meta from frontmatter
          if (this.data.frontmatter.description) {
            metaConfig.description = this.data.frontmatter.description;
          }
          if (this.data.frontmatter.keywords) {
            metaConfig.keywords = this.data.frontmatter.keywords;
          }
          if (this.data.frontmatter.image) {
            metaConfig.image = this.data.frontmatter.image;
          }

          this.metaTagsService.updateTags(metaConfig);
        }
      } else {
        // Handle null data gracefully
        this.id = '';
        this.date = '';
        this.title = 'Content not found';
        this.category = ContentCategory.Blog;
        this.aiEditor = false;
        this.markdown = '# Content not available\n\nThis content could not be loaded.';

        // Only set error meta tags on client-side
        if (isPlatformBrowser(this.platformId)) {
          this.metaTagsService.updateTags({
            title: 'Content not found | Jessy.co',
            description: 'The requested content could not be found.',
          });
        }
      }
    });
  }
}
