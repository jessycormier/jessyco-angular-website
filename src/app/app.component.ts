import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SkipToMainComponent } from './components/skip-to-main/skip-to-main.component';
import { LayoutService } from './services/layout.service';
import { MaskComponent } from './components/mask/mask.component';
import { MenuComponent } from './components/menu/menu.component';
import { MetaTagsService } from './services/meta-tags.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SkipToMainComponent, MaskComponent, MenuComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    public layout: LayoutService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private metaTagsService: MetaTagsService,
  ) {}

  ngOnInit() {
    // Listen for route changes and update meta tags from route data
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      let route = this.activatedRoute;

      while (route.firstChild) {
        route = route.firstChild;
      }

      const metaData = route.snapshot.data?.['meta'];

      if (metaData) {
        this.metaTagsService.updateTags({
          title: metaData.title,
          description: metaData.description,
          keywords: metaData.keywords,
          url: `https://jessy.co${this.router.url}`,
          type: metaData.type || 'website',
        });
      }
    });
  }
}
