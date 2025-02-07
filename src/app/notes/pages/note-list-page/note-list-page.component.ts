import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteListItem } from '../../interfaces/note-list-item.interface';

@Component({
  standalone: false,
  templateUrl: './note-list-page.component.html',
})
export class NoteListPageComponent {
  notes: NoteListItem[] = [];

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(({ data }) => {
      this.notes = data;
    });
  }
}
