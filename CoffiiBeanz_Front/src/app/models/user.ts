import {card} from './card';
import {review} from './review';
import {cart} from './cart';

export interface user{
  Name:string,
  userid:string,
  cart:Array<cart>,
  savedItems:Array<card['id']>,
  score:(grade:card['id'])=>number, //send user id then backend finds all his/her 
  findCard:(searchParam:string)=>card,
  buyCard:(moveToBuyByCardId:card['id'])=>void,
  //createReview():any,
  //AllMyProducts():any
}

/*
    card obj
    review obj

    card.review.push(review)
*/

