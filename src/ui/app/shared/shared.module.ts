import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { CamelCasePipe } from './pipes/camel-case/camel-case.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CamelCasePipe
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule
  ],
  exports: [
    TranslateModule,
    CamelCasePipe,
    FormsModule
  ],
  providers: [
    CamelCasePipe
  ]
})
export class SharedModule {}
