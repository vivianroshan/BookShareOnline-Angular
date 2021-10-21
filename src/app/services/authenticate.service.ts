import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/LoginModel';
import { RegisterModel } from '../models/RegisterModel';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient) { }

  readonly APIUrl = "https://localhost:44343/api";

  formData = new LoginModel();
  formData2 = new RegisterModel();

  getJWTToken(): Observable<any> {
    return this.http.post<any>(this.APIUrl + "/authenticate/login",this.formData);
  }
  ifLoggedIn():boolean{
    if(sessionStorage.getItem('token')=='0'){
      return false;
    }
    else{
      return true;
    }
  }
  register(){
    return this.http.post<any>(this.APIUrl + "/authenticate/register",this.formData2);
  }
  ifSellerOrBoth():boolean{
    if(sessionStorage.getItem('role')=='seller'||sessionStorage.getItem('role')=='both'||sessionStorage.getItem('role')=='admin'){
      return true;
    }
    else{
      return false;
    }
  }
  ifBuyerOrBoth():boolean{
    if(sessionStorage.getItem('role')=='buyer'||sessionStorage.getItem('role')=='both'||sessionStorage.getItem('role')=='admin'){
      return true;
    }
    else{
      return false;
    }
  }
  
}
