import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { BookModel } from '../models/BookModel';
import { RatingModel } from '../models/RatingModel';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  readonly APIUrl = "https://localhost:44343/api";
  readonly PhotoUrl = "https://localhost:44390/Photos/";
  formData = new BookModel();
  bookid= 0;
  rating = new Array<RatingModel>();
  userrating = 0;
  avgrating(){
    let total:any =0;
    let index:any=0;
    console.log(this.rating);
    for (index = 0; index < this.rating.length; index++) {
      total = this.rating[index].score; 
    }
    return (total/index);
  }
  url(x: any): string{
    return this.PhotoUrl+x;
  }
  addBook() {
    return this.http.post(this.APIUrl + "/books", this.formData);
  }

  getBooks(){
    return this.http.get<any[]>(this.APIUrl + "/books/home");
  }
  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Books/SaveFile',val);
  }

  private _listenrs = new Subject<any>();

  listen():Observable<any>{
    return this._listenrs.asObservable();
  }
  filter(filterby:string){
    this._listenrs.next(filterby);
  }
}
