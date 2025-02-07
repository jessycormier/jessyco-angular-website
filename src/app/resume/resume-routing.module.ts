import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { resumeRoutes } from './resume..routes';

@NgModule({
  imports: [RouterModule.forChild(resumeRoutes)],
  exports: [RouterModule],
})
export class ResumeRoutingModule {}
