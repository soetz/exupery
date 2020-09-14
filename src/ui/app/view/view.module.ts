import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserViewSlotComponent } from './browser-view-slot/browser-view-slot.component';

@NgModule({
  declarations: [
    BrowserViewSlotComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BrowserViewSlotComponent
  ]
})
export class ViewModule { }
