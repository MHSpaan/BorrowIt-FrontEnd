import { Component } from '@angular/core';
import { IndexComponent } from 'src/app/shared/index/index.component';
import { HttpService } from 'src/app/shared/http.service';
import { User } from '../user';

@Component({
  selector: 'app-index-users',
  templateUrl: './index-users.component.html',
  styleUrls: ['./index-users.component.css']
})
export class IndexUsersComponent extends IndexComponent {

  headers = Object.getOwnPropertyNames(new User());
  title = "users";

  constructor(
    httpService: HttpService) {
    super(httpService);

  }

}
