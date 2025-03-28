import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, of, throwError } from 'rxjs';
import { UnifiedService } from '../services/unified.service';
import { ContentCategory } from './content-category.enum';

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
    return this.getContentIndex().pipe(
      map((json) => {
        return json.categories.filter((c) => c.name === category)[0].items;
      }),
      catchError(this.handleError),
    );
  }

  getCategoryList() {
    return this.getContentIndex().pipe(
      map((json) => {
        return json.categories.map((c) => {
          return { ...c, items: undefined };
        });
      }),
      catchError(this.handleError),
    );
  }
  getLatest() {
    return this.getContentIndex().pipe(
      map((json) => json.latest),
      catchError(this.handleError),
    );
  }

  private getContentIndex() {
    return this.http
      .get<{
        categories: { name: string; path: string; count: number; items?: [] }[];
        latest: { id: string; date: string; title: string; path: string }[];
      }>(`content/index.json`, { responseType: 'json' })
      .pipe(catchError(this.handleError));
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
