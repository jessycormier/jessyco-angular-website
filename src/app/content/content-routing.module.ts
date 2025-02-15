import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { contentRoutes } from './content.routes';

@NgModule({
  imports: [RouterModule.forChild(contentRoutes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}
