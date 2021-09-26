import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-showbook',
  templateUrl: './showbook.component.html',
  styleUrls: ['./showbook.component.scss']
})  
export class ShowbookComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<ShowbookComponent>,private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  OnClose(){
    this.dialogbox.close();
  }
}
