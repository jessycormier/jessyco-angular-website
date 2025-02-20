import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentState } from '@jc/component-state.enum';
import { ContentListItem } from '@jc/content/interfaces/content-list-item.interface';
import { StatefulComponent } from '@jc/stateful-component.interface';

@Component({
  selector: 'app-content-list-item',
  imports: [RouterLink],
  templateUrl: './content-list-item.component.html',
})
export class ContentListItemComponent implements StatefulComponent {
  ComponentState = ComponentState;

  @Input()
  state: ComponentState = ComponentState.Ready; // Default will be ready.

  @Input()
  item!: ContentListItem;
}
