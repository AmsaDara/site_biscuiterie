import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeconseilComponent } from './listeconseil.component';

describe('ListeconseilComponent', () => {
  let component: ListeconseilComponent;
  let fixture: ComponentFixture<ListeconseilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeconseilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeconseilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
