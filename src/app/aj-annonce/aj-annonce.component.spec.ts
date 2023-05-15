import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjAnnonceComponent } from './aj-annonce.component';

describe('AjAnnonceComponent', () => {
  let component: AjAnnonceComponent;
  let fixture: ComponentFixture<AjAnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjAnnonceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
