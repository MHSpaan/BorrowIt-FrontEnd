import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorrowItNavBarComponent } from './borrow-it-nav-bar/borrow-it-nav-bar.component';
import { CreateBranchComponent } from './Branches/create-branch/create-branch.component';
import { DeleteBranchComponent } from './Branches/delete-branch/delete-branch.component';
import { DetailsBranchComponent } from './Branches/details-branch/details-branch.component';
import { EditBranchComponent } from './Branches/edit-branch/edit-branch.component';
import { IndexBranchesComponent } from './Branches/index-branches/index-branches.component';
import { CreateUserComponent } from './Users/create-user/create-user.component';
import { DeleteUserComponent } from './Users/delete-user/delete-user.component';
import { DetailsUserComponent } from './Users/details-user/details-user.component';
import { EditUserComponent } from './Users/edit-user/edit-user.component';
import { IndexUsersComponent } from './Users/index-users/index-users.component';



@NgModule({
  declarations: [
    AppComponent,
    CreateBranchComponent,
    EditBranchComponent,
    DeleteBranchComponent,
    IndexBranchesComponent,
    DetailsBranchComponent,
    BorrowItNavBarComponent,
    CreateUserComponent,
    DetailsUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    IndexUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([
      { path: 'branches', component: IndexBranchesComponent },
      { path: 'branches/create', component: CreateBranchComponent },
      { path: 'branches/edit', component: EditBranchComponent },
      { path: 'branches/delete', component: DeleteBranchComponent },
      { path: 'branches/details', component: DetailsBranchComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
