import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncePourClComponent } from './annonce-pour-cl.component';

describe('AnnoncePourClComponent', () => {
  let component: AnnoncePourClComponent;
  let fixture: ComponentFixture<AnnoncePourClComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnoncePourClComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnoncePourClComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
