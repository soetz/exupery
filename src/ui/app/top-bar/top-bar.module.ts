import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopBarComponent } from './top-bar.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabComponent } from './tab/tab.component';
import { PageControlsComponent } from './page-controls/page-controls.component';
import { PageControlsButtonComponent } from './page-controls-button/page-controls-button.component';
import { AddressBarComponent } from './address-bar/address-bar.component';

@NgModule({
  declarations: [
    TopBarComponent,
    TabsContainerComponent,
    TabComponent,
    PageControlsComponent,
    PageControlsButtonComponent,
    AddressBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    TopBarComponent
  ]
})
export class TopBarModule { }
