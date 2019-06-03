import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseService } from './base-service';
import { FormService } from './form/form.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FormInputComponent } from './form-input/form-input.component';
import { IndexComponent } from './index/index.component';
import { HttpService } from './http.service';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    FormInputComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([]),
    FormsModule,
    MatInputModule,
    MatTableModule,
  ],
  providers: [BaseService, FormService, HttpService
  ],
  exports: [
    HttpClientModule,
    RouterModule,
    FormsModule,
    MatInputModule,
    FormInputComponent,
    IndexComponent
  ]

})
export class SharedModule { }
