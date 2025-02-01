import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
// import matter from 'gray-matter';
import fm from 'front-matter';
import { catchError, map, of, throwError } from 'rxjs';
import { PostData } from './post-data.interface';

export const postResolver: ResolveFn<any | PostData | null> = (route) => {
  const http = inject(HttpClient);
  const router = inject(Router);
  const id = route.paramMap.get('id');

  if (!id) {
    router.navigate(['/error/404']); // Redirect to 404 page
    return of(null); // Return a null observable to avoid breaking the route
  }

  const filePath = `content/${id}.md`;

  return http.get(filePath, { responseType: 'text' }).pipe(
    map((markdown) => {
      const parsed = fm(markdown);
      return {
        frontmatter: parsed.attributes,
        markdown: parsed.body,
      };
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
