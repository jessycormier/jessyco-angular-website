import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ContentCategory } from '@jc/content/content-category.enum';
import { Content } from '@jc/content/interfaces/content.interface';
import { MarkdownModule } from 'ngx-markdown';
import { LinkComponent } from "../../../components/link/link.component";

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

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data) => {

      this.data = data['content'] as Content;
      this.id = this.data.frontmatter.id;
      this.date = this.data.frontmatter.date;
      this.title = this.data.frontmatter.title;
      this.category = this.data.frontmatter.category;
      this.aiEditor = this.data.frontmatter.aiEditor ?? false;
      this.markdown = this.data.markdown;
    });
  }
}
