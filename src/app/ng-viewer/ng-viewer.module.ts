import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { NgViewerComponent } from './ng-viewer.component';

@NgModule({
  declarations: [
    NgViewerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
      NgViewerComponent
  ],
  providers: []
})
export class NgViewerModule {}