import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByarticleComponent } from './byarticle.component';

describe('ByarticleComponent', () => {
  let component: ByarticleComponent;
  let fixture: ComponentFixture<ByarticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByarticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
