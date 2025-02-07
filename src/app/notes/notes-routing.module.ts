import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { notesRoutes } from './notes.routes';

@NgModule({
  imports: [RouterModule.forChild(notesRoutes)],
  exports: [RouterModule],
})
export class NotesRoutingModule {}
