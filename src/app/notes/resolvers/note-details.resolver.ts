import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { catchError, map, of, throwError } from 'rxjs';
import { NoteData } from '../interfaces/note-data.interface';
import { UnifiedService } from '../../services/unified.service';

export const noteDetailsResolver: ResolveFn<any | NoteData | null> = (route) => {
  const http = inject(HttpClient);
  const unifiedService = inject(UnifiedService);
  const router = inject(Router);
  const id = route.paramMap.get('id');

  if (!id) {
    router.navigate(['/error/404']); // Redirect to 404 page
    return of(null); // Return a null observable to avoid breaking the route
  }

  const filePath = `content/${id}.md`;

  return http.get(filePath, { responseType: 'text' }).pipe(
    map((markdown) => {
      const parsedMarkdown = unifiedService.parseMarkdown(markdown);
      return parsedMarkdown || { frontmatter: null, markdown: null };
    }),
    catchError((error) => {
      console.log({
        id,
        filePath,
        error,
      });
      router.navigate(['/error/404']); // Redirect to 404 page
      return throwError(() => new Error(error));
    }),
  );
};
