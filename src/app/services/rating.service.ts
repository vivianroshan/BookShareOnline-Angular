import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { BookModel } from '../models/BookModel';
import { RatingModel } from '../models/RatingModel';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  constructor(private http: HttpClient) { }
  readonly APIUrl = "https://localhost:44343/api";
  readonly PhotoUrl = "https://localhost:44390/Photos/"
  rate(bookid:number, rating:number){
    return this.http.post(this.APIUrl + "/ratings/"+localStorage.getItem('username')+"/"+bookid, rating);
  }
}
