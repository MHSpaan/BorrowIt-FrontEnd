import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexBranchesComponent } from './index-branches.component';

describe('IndexBranchesComponent', () => {
  let component: IndexBranchesComponent;
  let fixture: ComponentFixture<IndexBranchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexBranchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
