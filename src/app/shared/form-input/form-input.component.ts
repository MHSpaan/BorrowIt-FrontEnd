import { Component, OnInit, Input } from '@angular/core';
import { FormService } from '../form/form.service';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent extends FormService {

  @Input('headers') headers;
  @Input('item') item: {};

  constructor(
    route: ActivatedRoute,
    httpService: HttpService) {
    super(route, httpService);
   }

}
