import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnmrformComponent } from './unmrform.component';

describe('UnmrformComponent', () => {
  let component: UnmrformComponent;
  let fixture: ComponentFixture<UnmrformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnmrformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnmrformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
