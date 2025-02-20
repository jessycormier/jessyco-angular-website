import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, of, throwError } from 'rxjs';
import { UnifiedService } from '../services/unified.service';
import { ContentCategory } from './content-category.enum';
import { ContentListItem } from '@jc/content/interfaces/content-list-item.interface';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private unifiedService: UnifiedService,
  ) {}

  getContent(category: ContentCategory, id: string) {
    return this.http.get(`content/${category}/${id}.md`, { responseType: 'text' }).pipe(
      map((markdown) => {
        const parsedMarkdown = this.unifiedService.parseMarkdown(markdown) || { frontmatter: null, markdown: null };
        return parsedMarkdown || { frontmatter: null, markdown: null };
      }),
      catchError(this.handleError),
    );
  }

  getCategory(category: ContentCategory) {
    return this.http.get(`content/${category}/index.json`, { responseType: 'json' });
  }

  getLatest() {
    return this.http.get<ContentListItem>(`content/index.json`, { responseType: 'json' }).pipe(
      map((json: any) => json?.latest),
      catchError(this.handleError),
    );
  }

  getCategories() {
    return this.http.get(`content/index.json`, { responseType: 'json' }).pipe(
      map((json: any) => json?.categories || []),
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
