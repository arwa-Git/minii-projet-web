import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionclComponent } from './inscriptioncl.component';

describe('InscriptionclComponent', () => {
  let component: InscriptionclComponent;
  let fixture: ComponentFixture<InscriptionclComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionclComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
