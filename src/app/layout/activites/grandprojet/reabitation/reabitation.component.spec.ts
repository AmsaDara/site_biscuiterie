import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReabitationComponent } from './reabitation.component';

describe('ReabitationComponent', () => {
  let component: ReabitationComponent;
  let fixture: ComponentFixture<ReabitationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReabitationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReabitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
