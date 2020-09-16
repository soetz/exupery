import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageControlsButtonComponent } from './page-controls-button.component';

describe('PageControlsButtonComponent', () => {
  let component: PageControlsButtonComponent;
  let fixture: ComponentFixture<PageControlsButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageControlsButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageControlsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
