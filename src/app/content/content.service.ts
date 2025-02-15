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
    console.log(`content/${category}/${id}.md`);
    return this.http.get(`content/${category}/${id}.md`, { responseType: 'text' }).pipe(
      map((markdown) => {
        const parsedMarkdown = this.unifiedService.parseMarkdown(markdown) || { frontmatter: null, markdown: null };
        console.log(parsedMarkdown);
        return parsedMarkdown || { frontmatter: null, markdown: null };
      }),
      catchError(this.handleError),
    );
  }

  getCategory(category: ContentCategory) {
    console.log('Getting Category', category);
    return this.http.get(`content/${category}/index.json`, { responseType: 'json' }).pipe(map(json=> {
      console.log('GOT HERE TOO');
      return json;
    }));
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
