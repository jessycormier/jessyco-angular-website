import { CommonModule } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { LinkComponent } from '../components/link/link.component';
import { NoteListPageComponent } from './pages/note-list-page/note-list-page.component';
import { NotePageComponent } from './pages/note-page/note-page.component';
import { NotesRoutingModule } from './notes-routing.module';

@NgModule({
  declarations: [NoteListPageComponent, NotePageComponent],
  imports: [CommonModule, NotesRoutingModule, MarkdownModule, LinkComponent],
  providers: [provideHttpClient(withFetch())],
})
export class NotesModule {}
