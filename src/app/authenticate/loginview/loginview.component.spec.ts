import { Overlay } from '@angular/cdk/overlay';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { InjectionToken, NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule, MAT_DIALOG_SCROLL_STRATEGY_FACTORY } from '@angular/material/dialog';
import { AuthenticateService } from 'src/app/services/authenticate.service';

import { LoginviewComponent } from './loginview.component';

fdescribe('LoginviewComponent', () => {
  let component: LoginviewComponent;
  let fixture: ComponentFixture<LoginviewComponent>;

  class mockMatDialog extends MatDialog{

  }
  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      imports:[MatDialogModule],
      declarations: [ LoginviewComponent ],
      providers:[ AuthenticateService, HttpClient, HttpHandler]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
