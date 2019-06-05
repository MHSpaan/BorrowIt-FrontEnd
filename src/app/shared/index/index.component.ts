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
  isLoaded = false;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.loadItems();
    this.headers = this.headers;

  }

  loadItems() {
    this.httpService.getAll().subscribe(i => {
      this.items = i;
      this.isLoaded = true;
    });
  }

}
