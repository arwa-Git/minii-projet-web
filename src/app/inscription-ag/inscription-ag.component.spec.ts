import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionAgComponent } from './inscription-ag.component';

describe('InscriptionAgComponent', () => {
  let component: InscriptionAgComponent;
  let fixture: ComponentFixture<InscriptionAgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionAgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionAgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
