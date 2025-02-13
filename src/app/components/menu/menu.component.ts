import { Component, effect, HostListener, signal } from '@angular/core';
import { LayoutService } from '@jc/services/layout.service';
import { LinkComponent } from '../link/link.component';

@Component({
  selector: 'app-menu',
  imports: [LinkComponent],
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  isShown = '';
  constructor(private layout: LayoutService) {
    effect(() => {
      this.isShown = this.layout.menu() ? '' : '-translate-y-full';
    });
  }

  onClose($event: Event) {
    $event.preventDefault();
    this.layout.closeMenu();
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleEscKey(event: KeyboardEvent) {
    this.layout.closeMenu();
  }
}
