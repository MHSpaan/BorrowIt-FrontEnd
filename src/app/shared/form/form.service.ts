import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  id;

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService) {
      this.id = this.route.snapshot.paramMap.get('id'); }

  getItemById(id) {
    return this.httpService.getById(id);

  }

  save(item) {
    console.log(item);
    if (item.id) {
      this.httpService.update(item);
    } else {
      this.httpService.create(item);
    }
  }


}
