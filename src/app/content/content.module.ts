import { CommonModule } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LinkComponent } from '@jc/components/link/link.component';
import { ContentRoutingModule } from './content-routing.module';

@NgModule({
  imports: [CommonModule, ContentRoutingModule, LinkComponent],
  providers: [provideHttpClient(withFetch())],
})
export class ContentModule {}
