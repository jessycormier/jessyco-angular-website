import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ContentListItem } from '@jc/content/interfaces/content-list-item.interface';
import { ContentList } from '@jc/content/interfaces/content-list.interface';

@Component({
  selector: 'app-content-list-page',
  imports: [RouterLink],
  templateUrl: './content-list-page.component.html',
})
export class ContentListPageComponent {
  category!: string;
  items: ContentListItem[] = [];

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data: Partial<ContentList>) => {
      this.category = data.category || '';
      this.items = data.items || [];
    });
  }
}
