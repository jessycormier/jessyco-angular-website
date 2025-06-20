import { Routes } from '@angular/router';
import { contentMetaResolver } from '../resolvers/content-meta.resolver';
import { StandardLayoutComponent } from '../layouts/standard-layout/standard-layout.component';
import { ContentListPageComponent } from './pages/content-list-page/content-list-page.component';
import { ContentPageComponent } from './pages/content-page/content-page.component';

export const contentRoutes: Routes = [
  {
    path: '',
    component: StandardLayoutComponent,
    children: [
      // Dynamic content routes - handles any category from index.json
      {
        path: ':category/:id',
        component: ContentPageComponent,
        resolve: { content: contentMetaResolver },
      },
      {
        path: ':category',
        component: ContentListPageComponent,
        resolve: { items: contentMetaResolver },
      },
    ],
  },
];
