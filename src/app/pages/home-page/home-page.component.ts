import { Component, OnInit } from '@angular/core';
import { ComponentState } from '@jc/component-state.enum';
import { ContentListItemComponent } from '@jc/components/content-list-item/content-list-item.component';
import { ContentService } from '@jc/content/content.service';
import { ContentListItem } from '@jc/content/interfaces/content-list-item.interface';

@Component({
  selector: 'app-home-page',
  imports: [ContentListItemComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  ComponentState = ComponentState; // expose enum to html template.

  latest!: ContentListItem;

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentService.getLatest().subscribe((x) => (this.latest = x));
  }
}
