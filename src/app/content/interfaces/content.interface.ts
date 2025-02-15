import { ContentCategory } from '../content-category.enum';
import { ContentRouteData } from './content-route-data.interface';

export interface Content extends ContentRouteData {
  frontmatter: {
    id: string;
    title: string;
    date: string;
    category: ContentCategory;
  };
  markdown: string;
}
