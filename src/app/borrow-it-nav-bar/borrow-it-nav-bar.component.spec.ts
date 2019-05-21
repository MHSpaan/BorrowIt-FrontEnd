import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowItNavBarComponent } from './borrow-it-nav-bar.component';

describe('BorrowItNavBarComponent', () => {
  let component: BorrowItNavBarComponent;
  let fixture: ComponentFixture<BorrowItNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowItNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowItNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
