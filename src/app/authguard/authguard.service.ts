import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor() { }
  getRole(): any {
    return sessionStorage.getItem('role');
  }

  canBuy(){
    if(this.getRole()=="buyer"||this.getRole()=="both"){
      return true;
    }
    return false;
  }

  canSell(){
    if(this.getRole()==("seller")||this.getRole()=="both"){
      return true;
    }
    return false;
  }
}
