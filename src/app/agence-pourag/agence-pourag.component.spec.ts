import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencePouragComponent } from './agence-pourag.component';

describe('AgencePouragComponent', () => {
  let component: AgencePouragComponent;
  let fixture: ComponentFixture<AgencePouragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencePouragComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencePouragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
