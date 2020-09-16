import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideBarComponent } from './side-bar/side-bar.component';
import { QuickActionsComponent } from './quick-actions/quick-actions.component';
import { BlocksContainerComponent } from './blocks-container/blocks-container.component';
import { SettingsButtonComponent } from './settings-button/settings-button.component';
import { SideBarButtonComponent } from './side-bar-button/side-bar-button.component';
import { SideBarSeparatorComponent } from './side-bar-separator/side-bar-separator.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabComponent } from './tab/tab.component';
import { PageControlsComponent } from './page-controls/page-controls.component';
import { PageControlsButtonComponent } from './page-controls-button/page-controls-button.component';
import { AddressBarComponent } from './address-bar/address-bar.component';

@NgModule({
  declarations: [
    SideBarComponent,
    QuickActionsComponent,
    BlocksContainerComponent,
    SettingsButtonComponent,
    SideBarButtonComponent,
    SideBarSeparatorComponent,
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
  exports: [
    SideBarComponent,
    TopBarComponent
  ]
})
export class NavigationModule { }
