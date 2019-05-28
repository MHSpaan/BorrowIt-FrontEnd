import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  private pathAPI = "https://localhost:44308/api/"

  public errorMessage: string;

  constructor(private http: HttpClient, private config: AppConfig) { }

  getBranches() {
    this.http.get(this.pathAPI + "branches").subscribe(response => {
      console.log(response);
    });
  }
}
