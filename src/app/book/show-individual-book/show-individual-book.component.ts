import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from 'src/app/services/book.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-show-individual-book',
  templateUrl: './show-individual-book.component.html',
  styleUrls: ['./show-individual-book.component.scss']
})
export class ShowIndividualBookComponent implements OnInit {

  constructor(public dialogbox : MatDialogRef<ShowIndividualBookComponent>,public service: BookService, private _snackBar: MatSnackBar,
    public cartService: CartService) { }

  ngOnInit(): void {
  }
  onClose(){
    this.dialogbox.close();
  }

  addToCart(quantity:any){
    this.cartService.addToCart(this.service.bookid,Number(quantity)).subscribe(
      res=>{
        console.log(res);
        this._snackBar.open("Added to Cart Sucessfully !!!","",{
          duration:5000,
          verticalPosition:"top"
        });
      },
      err=>{
        console.log(err);
        this._snackBar.open("Failed to add to cart !!!","",{
          duration:5000,
          verticalPosition:"top",
        });
      });
  }

  order(){}
}
