import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookModel } from '../models/BookModel';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  readonly APIUrl = "https://localhost:44343/api";

  formData = new BookModel();

  getJWTToken(): Observable<any> {
    return this.http.post<any>(this.APIUrl + "/authenticate/login",this.formData);
  }
}
