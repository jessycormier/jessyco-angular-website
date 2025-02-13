import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note-home-page',
  imports: [],
  templateUrl: './note-home-page.component.html',
})
export class NoteHomePageComponent {
  data: any;
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(({ data }) => {
      this.data = data;
    });
  }
}
