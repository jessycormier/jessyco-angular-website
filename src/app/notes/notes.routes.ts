import { Routes } from '@angular/router';
import { StandardLayoutComponent } from '../layouts/standard-layout/standard-layout.component';
import { notesResolver } from './notes.resolver';
import { NoteHomePageComponent } from './pages/note-home-page/note-home-page.component';
import { NotePageComponent } from './pages/note-page/note-page.component';
import { NoteRouteType } from './note-route-type.enum';

export const notesRoutes: Routes = [
  {
    path: '',
    component: StandardLayoutComponent,
    children: [
      {
        path: ':category/:id',
        component: NotePageComponent,
        resolve: { data: notesResolver },
        data: { type: NoteRouteType.notePage },
      },
      {
        path: ':category',
        component: NotePageComponent,
        resolve: { data: notesResolver },
        data: { type: NoteRouteType.categoryPage },
      },
      {
        path: ':id',
        component: NotePageComponent,
        resolve: { data: notesResolver },
        data: { type: NoteRouteType.notePage },
      },
      {
        path: '',
        component: NoteHomePageComponent,
        resolve: { data: notesResolver },
        data: { type: NoteRouteType.homePage },
      },
    ],
  },
];
