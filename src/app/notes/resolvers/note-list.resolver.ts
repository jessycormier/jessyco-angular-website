import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { NoteListItem } from '../interfaces/note-list-item.interface';

export const noteListResolver: ResolveFn<NoteListItem[]> = (route) => {
  const http = inject(HttpClient);

  // Add category selection, and pull the list from that category or full root list?

  const filePath = `content/posts.json`;

  return http.get<NoteListItem[]>(filePath, { responseType: 'json' });
};
