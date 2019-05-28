import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorrowItNavBarComponent } from './borrow-it-nav-bar/borrow-it-nav-bar.component';
import { routing } from './routing';
import { components } from './components';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AppConfig } from './config/config';




@NgModule({
  declarations: [
    AppComponent,
    BorrowItNavBarComponent,
    components,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatSidenavModule,
    HttpClientModule,

    RouterModule.forRoot(
      routing
    ),
    BrowserAnimationsModule
  ],
  providers: [
    AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
