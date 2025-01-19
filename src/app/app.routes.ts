import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ResumePageComponent } from './pages/resume-page/resume-page.component';
import { StandardLayoutComponent } from './layouts/standard-layout/standard-layout.component';
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
        path: 'resume',
        component: ResumePageComponent,
      },
    ],
  },

  {
    path: 'test',
    component: StandardLayoutComponent,
    children: [
      {
        path: '',
        component: TestPageComponent
      }
    ]
  }
];
