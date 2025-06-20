import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Router } from '@angular/router';
import { CategoryValidationService } from '../content/services/category-validation.service';
import { ContentService } from '../content/services/content.service';
import { MetaTagsService } from '../services/meta-tags.service';
import { catchError, of, switchMap, tap } from 'rxjs';

/**
 * Enhanced content resolver that also handles meta tags during SSR
 */
export const contentMetaResolver: ResolveFn<any | null> = (route: ActivatedRouteSnapshot) => {
  const contentService = inject(ContentService);
  const categoryValidationService = inject(CategoryValidationService);
  const metaTagsService = inject(MetaTagsService);
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  // Get category and id from route parameters
  const categoryParam = route.paramMap.get('category');
  const id = route.paramMap.get('id');

  if (!categoryParam) {
    // Only navigate during browser rendering, not during SSR
    if (isPlatformBrowser(platformId)) {
      router.navigate(['/error/404']);
    }
    return of(null);
  }

  // Validate category exists in index.json and get corresponding enum
  return categoryValidationService.getValidCategoryEnum(categoryParam).pipe(
    switchMap((category) => {
      if (!category) {
        // Only navigate during browser rendering, not during SSR
        if (isPlatformBrowser(platformId)) {
          router.navigate(['/error/404']);
        }
        return of(null);
      }

      // Determine if this is a list or content request based on presence of id
      if (id) {
        // Content request (e.g., /blog/my-post)
        return contentService.getContent(category, id).pipe(
          tap((content) => {
            // Set meta tags during SSR
            if (isPlatformServer(platformId) && content && content.frontmatter) {
              const metaConfig = metaTagsService.generateContentMetaTags(content.frontmatter, content.markdown);

              // Override with any custom meta from frontmatter
              if (content.frontmatter.description) {
                metaConfig.description = content.frontmatter.description;
              }
              if (content.frontmatter.keywords) {
                metaConfig.keywords = content.frontmatter.keywords;
              }
              if (content.frontmatter.image) {
                metaConfig.image = content.frontmatter.image;
              }

              metaTagsService.updateTags(metaConfig);
            }
          }),
          catchError(() => {
            // Only navigate during browser rendering, not during SSR
            if (isPlatformBrowser(platformId)) {
              router.navigate(['/error/404']);
            }
            return of(null);
          }),
        );
      } else {
        // List request (e.g., /blog)
        return contentService.getCategory(category).pipe(
          tap((categoryData) => {
            // Set meta tags for category pages during SSR
            if (isPlatformServer(platformId) && categoryData) {
              const metaConfig = metaTagsService.generateCategoryMetaTags(categoryParam);
              metaTagsService.updateTags(metaConfig);
            }
          }),
          catchError(() => {
            // Only navigate during browser rendering, not during SSR
            if (isPlatformBrowser(platformId)) {
              router.navigate(['/error/404']);
            }
            return of(null);
          }),
        );
      }
    }),
  );
};
