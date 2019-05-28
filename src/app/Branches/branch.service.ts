import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { AppConfig } from '../config/config';
import { Observable } from 'rxjs';
import { Branch } from './branch';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  private pathAPI = "https://localhost:44308/api/"

  public errorMessage: string;

  constructor(private http: HttpClient, private config: AppConfig) {
  }

  getBranches(): Observable<Branch> {
    return this.http.get<Branch>(this.pathAPI + "branches/");



  }
}
