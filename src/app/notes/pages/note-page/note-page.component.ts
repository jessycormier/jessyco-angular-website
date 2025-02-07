import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: false,
  templateUrl: './note-page.component.html',
})
export class NotePageComponent {
  markdownContent: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(({ data }) => {
      this.markdownContent = data.markdown; // Accessing resolved data
    });
  }
}
