import { CommonModule } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PostsRoutingModule } from './posts-routing.module';
import { MarkdownModule } from 'ngx-markdown';
import { PostListPageComponent } from './post-list-page/post-list-page.component';
import { PostPageComponent } from './post-page/post-page.component';

@NgModule({
  declarations: [PostListPageComponent, PostPageComponent],
  imports: [CommonModule, PostsRoutingModule, MarkdownModule],
  providers: [provideHttpClient(withFetch())],
  // exports: [PostListPageComponent, PostPageComponent],
})
export class PostsModule {}
