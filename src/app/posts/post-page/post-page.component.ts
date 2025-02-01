import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: false,
  templateUrl: './post-page.component.html',
})
export class PostPageComponent {
  markdownContent: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(({post}) => {
      this.markdownContent = post.markdown; // Accessing resolved data
    });
  }
}
