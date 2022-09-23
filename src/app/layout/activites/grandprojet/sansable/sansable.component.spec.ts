import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SansableComponent } from './sansable.component';

describe('SansableComponent', () => {
  let component: SansableComponent;
  let fixture: ComponentFixture<SansableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SansableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SansableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
