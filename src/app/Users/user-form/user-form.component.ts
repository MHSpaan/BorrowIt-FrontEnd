import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormInputComponent } from 'src/app/shared/form-input/form-input.component';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent extends FormInputComponent implements OnInit {

  headers = Object.getOwnPropertyNames(new User());


  constructor(
    route: ActivatedRoute,
    httpService: HttpService) {
    super(route, httpService);
  }

  ngOnInit() {
    this.item = new User(this.item);
  }

}
