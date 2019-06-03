import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  id;
  item = {};

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService) {


    this.getIdandItem();
  }

  getIdandItem() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.getItem();
    }
  }

  getItem() {
    return this.httpService.getById(this.id).subscribe(item => {
      this.item = item;
    });

  }

  save(item) {
    console.log(item);
    if (this.id) {
      item.id = this.id;
      this.httpService.update(item);
    } else {
      this.httpService.create(item);
    }
  }


}
