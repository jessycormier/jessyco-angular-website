import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostListItem } from '../post-list-item.interface';

@Component({
  standalone: false,
  templateUrl: './post-list-page.component.html',
})
export class PostListPageComponent {
  posts: PostListItem[] = [];

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data) => {
      this.posts = data['posts'];
    });
  }
}
