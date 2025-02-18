import { Component, effect, HostListener } from '@angular/core';
import { LayoutService } from '@jc/services/layout.service';
import { LinkComponent } from '../link/link.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [LinkComponent, CommonModule],
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  isShown = false;
  constructor(private layout: LayoutService) {
    effect(() => {
      this.isShown = this.layout.menu();
    });
  }

  onClose($event: Event) {
    $event.preventDefault();
    this.layout.closeMenu();
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleEscKey() {
    this.layout.closeMenu();
  }
}
