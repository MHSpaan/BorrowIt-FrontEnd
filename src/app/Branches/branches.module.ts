import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IndexBranchesComponent } from './index-branches/index-branches.component';
import { BranchFormComponent } from './branch-form/branch-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    IndexBranchesComponent,
    BranchFormComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'branches', component: IndexBranchesComponent },
      { path: 'branches/new', component: BranchFormComponent },
      { path: 'branches/:id', component: BranchFormComponent },
    ]),
  ],
  providers:
    [
    ],
})
export class BranchesModule { }
