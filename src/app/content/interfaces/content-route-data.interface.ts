import { Data } from '@angular/router';
import { ContentCategory } from '../content-category.enum';
import { ContentLayout } from '../content-layout.enum';

export interface ContentRouteData extends Data {
  layout: ContentLayout;
  category: ContentCategory;
}
