import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IndexBranchesComponent } from './index-branches/index-branches.component';
import { DeleteBranchComponent } from './delete-branch/delete-branch.component';
import { DetailsBranchComponent } from './details-branch/details-branch.component';
import { BranchFormComponent } from './branch-form/branch-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DeleteBranchComponent,
    IndexBranchesComponent,
    DetailsBranchComponent,
    BranchFormComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'branches', component: IndexBranchesComponent },
      { path: 'branches/new', component: BranchFormComponent },
      { path: 'branches/:id', component: BranchFormComponent },
      { path: 'branches/delete', component: DeleteBranchComponent },
      { path: 'branches/details', component: DetailsBranchComponent }
    ]),
  ],
  providers:
    [
    ],
})
export class BranchesModule { }
