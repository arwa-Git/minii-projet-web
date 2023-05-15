import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
// Import the ionicons module as an ES module
import 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';

// Import the ionicons script as a nomodule
import 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
