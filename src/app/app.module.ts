import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorrowItNavBarComponent } from './borrow-it-nav-bar/borrow-it-nav-bar.component';
import { routing } from './routing';
import { components } from './components';




@NgModule({
  declarations: [
    AppComponent,
    BorrowItNavBarComponent,
    components,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(
      routing
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
