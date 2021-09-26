import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  constructor(private service: CartService,
    private dialog: MatDialog) {
    // this.service.listen().subscribe((m: any) => {
    //   console.log(m);
    //   this.refreshCartList();
    // })
    this.refreshCartList();
  }
  ngOnInit(): void {
    this.refreshCartList()
  }

  listData = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'BookName', 'Quantity', 'Price', 'SumTotal'];
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  refreshCartList() {
    this.service.getCartList().subscribe(data => {
      this.listData = new MatTableDataSource(data);
      this.listData.sort = this.sort;
      console.log(this.listData);
    });
    console.log(this.listData);
  }
  onAdd(){
  }
  applyFilter(event:Event){

  }
}
