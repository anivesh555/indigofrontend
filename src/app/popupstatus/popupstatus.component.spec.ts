import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupstatusComponent } from './popupstatus.component';

describe('PopupstatusComponent', () => {
  let component: PopupstatusComponent;
  let fixture: ComponentFixture<PopupstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
