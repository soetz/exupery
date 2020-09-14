import { Component, OnInit, ElementRef } from '@angular/core';
import { BrowserService } from 'app/core/services';
import { ViewRectangleModel } from 'app/shared/models/';

@Component({
  selector: 'exupery-browser-view-slot',
  templateUrl: './browser-view-slot.component.html',
  styleUrls: ['./browser-view-slot.component.scss']
})
export class BrowserViewSlotComponent implements OnInit {

  private hostElement: ElementRef;
  private browserService: BrowserService;

  private oldViewRectangle: ViewRectangleModel;

  constructor(
    hostElement: ElementRef,
    browserService: BrowserService
  ) {
    this.hostElement = hostElement;
    this.browserService = browserService;

    requestAnimationFrame(this.animationLoop);
  }

  ngOnInit(): void {
  }

  private animationLoop = (): void => {
    this.animate();
    requestAnimationFrame(this.animationLoop);
  }

  private animate = (): void => {
    this.sendCurrentPositionAndSize();
  }

  private sendCurrentPositionAndSize = (): void => {
    const currentViewRectangle = new ViewRectangleModel(this.hostElement.nativeElement.getBoundingClientRect());
    if(!this.oldViewRectangle || !this.oldViewRectangle.isEqualTo(currentViewRectangle)) {
      this.oldViewRectangle = currentViewRectangle;
      this.browserService.browserViewSlotRectangle(currentViewRectangle);
    }
  }
}
