import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './book/addbook/addbook.component';
import { ShowbookComponent } from './book/showbook/showbook.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:"cart", component:CartComponent},
  {path:"addbook", component:AddbookComponent},
  {path:"showbook", component:ShowbookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
