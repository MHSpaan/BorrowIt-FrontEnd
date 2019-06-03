import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  @Input('headers') headers: string[];
  items;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.loadItems();
    this.headers = this.headers.filter(header => !header.toLowerCase().includes('id'));

  }

  loadItems() {
    this.httpService.getAll()
      .subscribe(items => {
        this.items = items;
      });
  }

}
