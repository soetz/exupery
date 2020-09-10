import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserService } from './services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    BrowserService,
    {
      provide: APP_INITIALIZER,
      useFactory: (browserService: BrowserService) => () => browserService.initialize(),
      deps: [BrowserService],
      multi: true
    }
  ]
})
export class CoreModule { }
