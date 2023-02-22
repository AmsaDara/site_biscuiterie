import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecremunicipalComponent } from './secremunicipal.component';

describe('SecremunicipalComponent', () => {
  let component: SecremunicipalComponent;
  let fixture: ComponentFixture<SecremunicipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecremunicipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecremunicipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
