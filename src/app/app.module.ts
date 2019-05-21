import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateBranchComponent } from './Branches/create-branch/create-branch.component';
import { EditBranchComponent } from './Branches/edit-branch/edit-branch.component';
import { RemoveBranchComponent } from './Branches/remove-branch/remove-branch.component';
import { ShowBranchesComponent } from './Branches/show-branches/show-branches.component';
import { DetailsBranchComponent } from './Branches/details-branch/details-branch.component';
import { BorrowItNavBarComponent } from './borrow-it-nav-bar/borrow-it-nav-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CreateBranchComponent,
    EditBranchComponent,
    RemoveBranchComponent,
    ShowBranchesComponent,
    DetailsBranchComponent,
    BorrowItNavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([
      { path: 'branches', component: ShowBranchesComponent },
      { path: 'branches/create', component: CreateBranchComponent },
      { path: 'branches/edit', component: EditBranchComponent },
      { path: 'branches/delete', component: RemoveBranchComponent },
      { path: 'branches/details', component: DetailsBranchComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
