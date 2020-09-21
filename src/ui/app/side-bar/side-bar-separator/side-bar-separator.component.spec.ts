import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarSeparatorComponent } from './side-bar-separator.component';

describe('SideBarSeparatorComponent', () => {
  let component: SideBarSeparatorComponent;
  let fixture: ComponentFixture<SideBarSeparatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarSeparatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
