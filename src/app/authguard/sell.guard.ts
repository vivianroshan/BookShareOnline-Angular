import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../authenticate/login/login.component';
import { AuthenticateService } from '../services/authenticate.service';
import { AuthguardService } from './authguard.service';

@Injectable({
  providedIn: 'root'
})
export class SellGuard implements CanActivate {
  constructor(private service: AuthguardService, private authService: AuthenticateService, private dialog: MatDialog, private router:Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree | any {
    if (!this.authService.ifLoggedIn()) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "70%";
      this.dialog.open(LoginComponent, dialogConfig);
      // return false;
    }
    return this.service.canSell();
  }
}
