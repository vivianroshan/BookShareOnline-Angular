import { BookModel } from "./BookModel";

export class RatingModel{
    id =  new Number();
    score = new Number();
    username = new String();
    book=new Array<BookModel>();
}