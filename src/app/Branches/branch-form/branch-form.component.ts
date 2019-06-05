import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/shared/form/form.service';
import { Branch } from '../branch';
import { HttpService } from 'src/app/shared/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-branch-form',
  templateUrl: './branch-form.component.html',
  styleUrls: ['./branch-form.component.css'],
})
export class BranchFormComponent extends FormService implements OnInit {

  types: string[] = [];
  branch = new Branch({});
  headers = Object.getOwnPropertyNames(new Branch({}));

  constructor(
    route: ActivatedRoute,
    httpService: HttpService) {
    super(route, httpService);
  }

  ngOnInit() {
    if (this.id) {
      this.getItemById(this.id).subscribe((i: {}) => {
        this.branch = new Branch(i);
      });
    }
    this.types[1] = 'select';
  }

}
