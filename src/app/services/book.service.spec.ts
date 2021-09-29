import { HttpClient } from '@angular/common/http';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { RatingModel } from '../models/RatingModel';

import { BookService } from './book.service';

describe('BookService', () => {
  let component: BookService;
  let fixture: ComponentFixture<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[HttpClient],
      providers: [BookService]
    });
    fixture=TestBed.createComponent(HttpClient);
    component=fixture.componentInstance;
  });
  fixture=TestBed.createComponent(HttpClient);
  component=fixture.componentInstance;

  it('should be created', () => {
    inject([HttpClient],(injectService:HttpClient)=>{
      expect(injectService).toBe()
    });
    expect(service).toBeTruthy();
  });
  it('url',()=>{
    expect(service.url("myphoto")).toContain(service.PhotoUrl+"myphoto");
  });
});
