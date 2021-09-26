import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss']
})
export class AddbookComponent implements OnInit {

  constructor(public service:BookService) { }

  ngOnInit(): void {
  }
  onSubmit(Form:NgForm){

  }

}
