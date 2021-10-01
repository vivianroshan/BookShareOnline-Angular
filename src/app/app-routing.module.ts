import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddbookComponent } from './book/addbook/addbook.component';
import { ShowbookComponent } from './book/showbook/showbook.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ShowOrderComponent } from './order/show-order/show-order.component';

const routes: Routes = [
  {path:"cart", component:CartComponent},
  {path:"addbook", component:AddbookComponent},
  {path:"showbook", component:ShowbookComponent},
  {path:"orderbook", component:ShowOrderComponent},
  {path:"", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
