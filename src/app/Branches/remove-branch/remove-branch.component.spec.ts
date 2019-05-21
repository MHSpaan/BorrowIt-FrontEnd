import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveBranchComponent } from './remove-branch.component';

describe('RemoveBranchComponent', () => {
  let component: RemoveBranchComponent;
  let fixture: ComponentFixture<RemoveBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
