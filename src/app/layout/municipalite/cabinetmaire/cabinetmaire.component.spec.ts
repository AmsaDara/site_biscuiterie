import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetmaireComponent } from './cabinetmaire.component';

describe('CabinetmaireComponent', () => {
  let component: CabinetmaireComponent;
  let fixture: ComponentFixture<CabinetmaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinetmaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetmaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
