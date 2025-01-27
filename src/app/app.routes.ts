import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ResumePageComponent } from './pages/resume-page/resume-page.component';
import { StandardLayoutComponent } from './layouts/standard-layout/standard-layout.component';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { EmptyLayoutComponent } from './layouts/empty-layout/empty-layout.component';

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
        component: TestPageComponent
      }
    ]
  }
];
