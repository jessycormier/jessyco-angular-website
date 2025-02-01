import { Routes } from '@angular/router';
import { CenterLayoutComponent } from './layouts/center-layout/center-layout.component';
import { EmptyLayoutComponent } from './layouts/empty-layout/empty-layout.component';
import { StandardLayoutComponent } from './layouts/standard-layout/standard-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ResumePageComponent } from './pages/resume-page/resume-page.component';
import { Status404PageComponent } from './pages/status-404-page/status-404-page.component';
import { Status418PageComponent } from './pages/status-418-page/status-418-page.component';
import { Status500PageComponent } from './pages/status-500-page/status-500-page.component';
import { TestPageComponent } from './pages/test-page/test-page.component';

export const routes: Routes = [
  // Standard Layout
  {
    path: '',
    component: StandardLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'posts',
        loadChildren: () =>
          import('./posts/posts.module').then((m) => m.PostsModule),
      },
    ],
  },
  // Empty Layout
  {
    path: '',
    component: EmptyLayoutComponent,
    children: [
      {
        path: 'resume',
        component: ResumePageComponent,
      },
      {
        path: 'test',
        component: TestPageComponent,
      },
    ],
  },
  // Center Screen Layout
  {
    path: 'error',
    component: CenterLayoutComponent,
    children: [
      { path: 'client', component: Status418PageComponent },
      { path: 'not-found', component: Status404PageComponent },
      { path: 'server-error', component: Status500PageComponent },

      { path: '404', redirectTo: 'not-found' },
      { path: '418', redirectTo: 'client' },
      { path: '500', redirectTo: 'server-error' },
    ],
  },
  // Catch All to redirect to not found 404 page.
  {
    path: '**',
    redirectTo: 'error/not-found',
  },
];
