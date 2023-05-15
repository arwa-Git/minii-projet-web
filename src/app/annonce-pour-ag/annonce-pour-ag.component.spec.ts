import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncePourAgComponent } from './annonce-pour-ag.component';

describe('AnnoncePourAgComponent', () => {
  let component: AnnoncePourAgComponent;
  let fixture: ComponentFixture<AnnoncePourAgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnoncePourAgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnoncePourAgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
