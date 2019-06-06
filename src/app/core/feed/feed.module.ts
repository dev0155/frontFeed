import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FeedsComponent} from './feeds.component';

@NgModule({
  declarations: [
    FeedsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FeedsComponent
  ]
})
export class FeedModule { }
