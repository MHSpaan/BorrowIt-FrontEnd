import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormService } from 'src/app/shared/form/form.service';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent extends FormService implements OnInit {

  types: string[] = [];
  user = new User({});
  id;
  headers = Object.getOwnPropertyNames(new User({}));

  constructor(
    route: ActivatedRoute,
    httpService: HttpService) {
    super(route, httpService);
  }

  ngOnInit() {
    if (this.id) {
      this.getItemById(this.id).subscribe((i: {}) => {
        this.user = new User(i);
      });
    }
    this.types[3] = 'email';
  }

}
