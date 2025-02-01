import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { PostListItem } from './post-list-item.interface';

export const postListResolver: ResolveFn<PostListItem[]> = (route) => {
  const http = inject(HttpClient);

  const filePath = `content/posts.json`;

  return http.get<PostListItem[]>(filePath, { responseType: 'json' });
};
