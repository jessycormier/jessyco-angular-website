import { isPlatformServer } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { MetaTagsService } from '../services/meta-tags.service';
import { of } from 'rxjs';

/**
 * Resolver to set meta tags during SSR for static routes
 */
export const metaResolver: ResolveFn<boolean> = (route: ActivatedRouteSnapshot) => {
  const metaTagsService = inject(MetaTagsService);
  const platformId = inject(PLATFORM_ID);

  // Only set meta tags during SSR - client-side will be handled by components
  if (isPlatformServer(platformId)) {
    const metaData = route.data?.['meta'];
    if (metaData) {
      // Construct the full URL from the route
      let fullUrl = 'https://jessy.co';
      if (route.url && route.url.length > 0) {
        fullUrl += route.url.map((segment) => '/' + segment.path).join('');
      } else {
        fullUrl += '/'; // home page
      }

      metaTagsService.updateTags({
        title: metaData.title,
        description: metaData.description,
        keywords: metaData.keywords,
        url: fullUrl,
        type: metaData.type || 'website',
      });
    }
  }

  return of(true);
};
