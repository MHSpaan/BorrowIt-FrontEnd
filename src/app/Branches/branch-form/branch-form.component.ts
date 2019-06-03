import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/shared/http.service';
import { Branch } from '../branch';
import { FormInputComponent } from 'src/app/shared/form-input/form-input.component';

@Component({
  selector: 'app-branch-form',
  templateUrl: './branch-form.component.html',
  styleUrls: ['./branch-form.component.css'],
})
export class BranchFormComponent extends FormInputComponent implements OnInit {

  headers = Object.getOwnPropertyNames(new Branch());


  constructor(
    route: ActivatedRoute,
    httpService: HttpService) {
    super(route, httpService);
  }

  ngOnInit() {
    this.item = new Branch(this.item);
  }

}
