import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from 'src/app/services/book.service';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-show-individual-book',
  templateUrl: './show-individual-book.component.html',
  styleUrls: ['./show-individual-book.component.scss'],
})
export class ShowIndividualBookComponent implements OnInit {
  constructor(
    public dialogbox: MatDialogRef<ShowIndividualBookComponent>,
    public service: BookService,
    private _snackBar: MatSnackBar,
    public cartService: CartService,
    public orderService: OrderService,
    public ratingService: RatingService
  ) { }
  photoFilePath = this.service.PhotoUrl + "download.png";
  // photoFilePath = this.service.PhotoUrl+this.service.formData.photoFileName;

  ngOnInit(): void {
    this.photoFilePath = this.service.PhotoUrl + this.service.formData.photoFileName;
  }
  onClose() {
    this.dialogbox.close();
    this.service.filter("on close of individual book");
  }
  quantity = 1;
  rating = 1;
  addToCart(quantity: any) {
    if (quantity == 0) quantity = 1;
    this.cartService.addToCart(this.service.bookid, Number(quantity)).subscribe(
      (res) => {
        console.log(res);
        this._snackBar.open('Added to Cart Sucessfully !!!', '', {
          duration: 5000,
          verticalPosition: 'top',
        });
      },
      (err) => {
        console.log(err);
        this._snackBar.open('Failed to add to cart !!!', '', {
          duration: 5000,
          verticalPosition: 'top',
        });
      }
    );
  }
  onRating(rate:any) {
    if (Number(rate)<1 || Number(rate)>5){
      this._snackBar.open('Enter a valid rating 1, 2, 3, 4 ,5 !!!', '', {
        duration: 5000,
        verticalPosition: 'top',
      });
      return;
    }

    console.log(rate);
    this.ratingService.rate(this.service.bookid, Number(rate)).subscribe(res => { 
      console.log(res);
      this._snackBar.open('Rating Sucessfully !!!', '', {
        duration: 5000,
        verticalPosition: 'top',
      });
      this.onClose();
    },
    err => { 
      console.log(err);
      this._snackBar.open('Rating Failed !!!', '', {
        duration: 5000,
        verticalPosition: 'top',
      });
      this.onClose();
    });
  }
  Order(quantity: any) {
    if (quantity == 0) quantity = 1;
    this.orderService.Order(this.service.bookid, Number(quantity)).subscribe(
      (res) => {
        console.log(res);
        this._snackBar.open('Order Sucessfully !!!', '', {
          duration: 5000,
          verticalPosition: 'top',
        });
      },
      (err) => {
        console.log(err);
        this._snackBar.open('Order Failed !!!', '', {
          duration: 5000,
          verticalPosition: 'top',
        });
      }
    );
  }
}
