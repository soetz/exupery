import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { WebviewDirective } from './directives/';
import { CamelCasePipe } from './pipes/';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [WebviewDirective, CamelCasePipe],
  imports: [CommonModule, TranslateModule, FormsModule],
  exports: [TranslateModule, WebviewDirective, CamelCasePipe, FormsModule],
  providers: [CamelCasePipe]
})
export class SharedModule {}
