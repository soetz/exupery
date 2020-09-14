import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserViewSlotComponent } from './browser-view-slot.component';

describe('BrowserViewSlotComponent', () => {
  let component: BrowserViewSlotComponent;
  let fixture: ComponentFixture<BrowserViewSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserViewSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserViewSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
