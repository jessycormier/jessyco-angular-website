import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '@jc/content/interfaces/content.interface';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  imports: [MarkdownModule],
  templateUrl: './content-page.component.html',
})
export class ContentPageComponent {
  data!: Content;
  id!: string;
  date!: string;
  title!: string;
  markdown!: string;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data) => {
      this.data = data['content'] as Content;
      this.id = this.data.frontmatter.id;
      this.date = this.data.frontmatter.date;
      this.title = this.data.frontmatter.title;
      this.markdown = this.data.markdown;
    });
  }
}
