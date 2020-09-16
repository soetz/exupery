import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideBarComponent } from './side-bar/side-bar.component';
import { QuickActionsComponent } from './quick-actions/quick-actions.component';
import { BlocksContainerComponent } from './blocks-container/blocks-container.component';
import { SettingsButtonComponent } from './settings-button/settings-button.component';
import { SideBarButtonComponent } from './side-bar-button/side-bar-button.component';
import { SideBarSeparatorComponent } from './side-bar-separator/side-bar-separator.component';

@NgModule({
  declarations: [
    SideBarComponent,
    QuickActionsComponent,
    BlocksContainerComponent,
    SettingsButtonComponent,
    SideBarButtonComponent,
    SideBarSeparatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideBarComponent
  ]
})
export class SideBarModule { }
