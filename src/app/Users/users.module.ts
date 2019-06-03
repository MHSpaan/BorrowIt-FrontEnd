import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UserFormComponent } from './user-form/user-form.component';
import { IndexUsersComponent } from './index-users/index-users.component';

@NgModule({
  declarations: [
    UserFormComponent,
    IndexUsersComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'users', component: IndexUsersComponent },
      { path: 'users/new', component: UserFormComponent },
      { path: 'users/:id', component: UserFormComponent },
      // { path: 'branches/delete', component: DeleteBranchComponent },
      // { path: 'branches/details', component: DetailsBranchComponent }
    ]),
  ],
  providers:
    [
    ],
})
export class UsersModule { }
