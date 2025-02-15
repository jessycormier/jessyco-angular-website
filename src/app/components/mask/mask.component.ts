import { Component, effect } from '@angular/core';
import { LayoutService } from '@jc/services/layout.service';

@Component({
  selector: 'app-mask',
  imports: [],
  templateUrl: './mask.component.html',
})
export class MaskComponent {
  isShown = '';

  constructor(private layout: LayoutService) {
    effect(() => {
      this.isShown = this.layout.mask() ? '' : '-translate-full';
    });
  }

  onClick() {
    this.layout.closeMenu();
  }
}
