import { Component, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent {

  @Input('displayItem') displayItem;
  @Input('types') types;
  @Input('id') id;
  @Input('headers') headers;

  constructor(
    private httpService: HttpService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  save(item) {
    if (this.id) {
      item.id = this.id;
      this.httpService.update(item);
    } else {
      this.httpService.create(item);
    }
  }

  delete(id) {
    this.httpService.delete(id);
  }
}
