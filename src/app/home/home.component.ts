import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ShowIndividualBookComponent } from '../book/show-individual-book/show-individual-book.component';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: BookService,
    private dialog: MatDialog,) { 
    this.refreshBookList();
  }
  listData = new Array<any>();
  ngOnInit(): void {
  }
  refreshBookList() {
    this.service.getBooks().subscribe((data) => {
      this.listData = data;
      // console.log(this.listData);
      for (let index = 0; index < this.listData.length; index++) {

        // this.listData[index].photoFileName = x; 

      }
      // console.log(this.listData);
    });
  }
  funct(x: any): string{
    return this.service.PhotoUrl+x;
  }
  showIndividualBook(book: any,photoFileName : any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    this.dialog.open(ShowIndividualBookComponent, dialogConfig);
    this.service.bookid = book.id;
    this.service.formData = book;
  }
}