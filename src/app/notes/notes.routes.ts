import { Routes } from '@angular/router';
import { NoteListPageComponent } from './pages/note-list-page/note-list-page.component';
import { NotePageComponent } from './pages/note-page/note-page.component';
import { noteListResolver } from './resolvers/note-list.resolver';
import { noteDetailsResolver } from './resolvers/note-details.resolver';
import { StandardLayoutComponent } from '../layouts/standard-layout/standard-layout.component';

export const notesRoutes: Routes = [
    // Standard Layout
    {
      path: '',
      component: StandardLayoutComponent,
      children: [
        {
          path: '',
          component: NoteListPageComponent,
          resolve: { data: noteListResolver },
        },
        {
          path: ':id',
          component: NotePageComponent,
          resolve: { data: noteDetailsResolver },
        },
      ],
    },

];
