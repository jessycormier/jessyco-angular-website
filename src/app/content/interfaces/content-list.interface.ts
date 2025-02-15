import { ContentListItem } from './content-list-item.interface';
import { ContentRouteData } from './content-route-data.interface';

export interface ContentList extends ContentRouteData {
  items: ContentListItem[];
}
