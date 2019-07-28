import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NachbarTitleComponent } from './nachbar-title.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NachbarTitleComponent],
  exports: [NachbarTitleComponent]
})
export class NachbarTitleModule { }
