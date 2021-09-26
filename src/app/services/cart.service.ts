import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  readonly APIUrl = "https://localhost:44343/api";
  
  getCartList(){
    return this.http.get<any[]>(this.APIUrl + "/cart/"+localStorage.getItem('username'));
  }
  
}
