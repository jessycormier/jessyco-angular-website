import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, of, throwError } from 'rxjs';
import { UnifiedService } from '../services/unified.service';
import { NoteListItem } from './interfaces/note-list-item.interface';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private unifiedService: UnifiedService,
  ) {}

  i(s: string) {
    return this.http.get(s, { responseType: 'text' }).pipe(
      map((markdown) => {
        const parsedMarkdown = this.unifiedService.parseMarkdown(markdown) || { frontmatter: null, markdown: null };
        return parsedMarkdown || { frontmatter: null, markdown: null };
      }),
    );
  }

  getCategoryByName(categoryName?: string) {
    return this.http.get<NoteListItem[]>('content/posts.json', { responseType: 'json' });
  }

  getNoteByName(filePath: string) {
    return this.http.get(filePath, { responseType: 'text' }).pipe(
      map((markdown) => {
        const parsedMarkdown = this.unifiedService.parseMarkdown(markdown) || { frontmatter: null, markdown: null };
        return parsedMarkdown || { frontmatter: null, markdown: null };
      }),
      catchError(this.handleError),
    );
  }

  goToError404() {
    this.router.navigate(['/error/404']);
    return of(null);
  }

  private handleError(error: any) {
    this.goToError404();
    return throwError(() => new Error(error));
  }
}
