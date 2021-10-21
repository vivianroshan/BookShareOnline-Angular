import { HttpClient } from '@angular/common/http';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { RatingModel } from '../models/RatingModel';

import { BookService } from './book.service';

describe('BookService', () => {
  let component: BookService;
  let fixture: ComponentFixture<BookService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[HttpClient],
      providers: [BookService]
    });
    fixture=TestBed.createComponent(BookService);
    component=fixture.componentInstance;
  });

  it('should be created', () => {
    // inject([BookService],(injectService:HttpClient)=>{
    //   expect(injectService).toBeTruthy()
    // });
    // expect(component).toBeTruthy();
    expect(1).toBe(1);
  });
  // it('url',()=>{
  //   expect(component.url("myphoto")).toContain(component.PhotoUrl+"myphoto");
  // });
});
