import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ContentService } from './content.service';
import { ContentCategory } from './content-category.enum';
import { ContentLayout } from './content-layout.enum';

export const contentResolver: ResolveFn<any | null> = (route) => {
  const contentService = inject(ContentService);

  const id = route.paramMap.get('id');

  const routeData = route.data as {
    layout: ContentLayout;
    category: ContentCategory;
  };

  if (routeData.layout == ContentLayout.List) {
    return contentService.getCategory(routeData.category);
  }

  if (routeData.layout == ContentLayout.Content && id) {
    return contentService.getContent(routeData.category, id);
  }

  // Could be fun to have a randomizer to go to "known" page if content was not found.

  return;
};
