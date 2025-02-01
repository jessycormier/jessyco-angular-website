import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListPageComponent } from './post-list-page/post-list-page.component';
import { postListResolver } from './post-list.resolver';
import { PostPageComponent } from './post-page/post-page.component';
import { postResolver } from './post.resolver';

const routes: Routes = [
  {
    path: '',
    component: PostListPageComponent,
    resolve: { posts: postListResolver },
  },
  {
    path: ':id',
    component: PostPageComponent,
    resolve: { post: postResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
