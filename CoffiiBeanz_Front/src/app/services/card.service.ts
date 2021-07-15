import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { card } from '../models/card';
import { review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class CardService {
cards: Array<card>=[];
id:number=0;

  constructor(
    public http:HttpClient,
    private router:Router
    ) {
      
   }

// These Functions will be used to seed program will delete later
   seed(){
    let summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel assumenda maxime quas dolorem dolore repellendus blanditiis eligendi quam ratione minima id natus incidunt fugit numquam voluptates, consequatur, repudiandae, placeat molestiae!";

    let review:review={
      name:'BestReview11',
      stars:4,
      comment:'Your product sucks balls id natus incidunt fugit numquam voluptates, consequatur, repudiandae, placeat molestiae!'
    }

    let tempCard=[];

    tempCard.push(this.values(this.generateNewId(),'Xbox',summary,389.00,'harry','https://source.unsplash.com/300x225/?wave',review));
    tempCard.push(this.values(this.generateNewId(),'Playstation',summary,810.00,'emanuel','https://source.unsplash.com/300x225/?movie',review));
    tempCard.push(this.values(this.generateNewId(),'Nintendo',summary,110.00,'harry','https://source.unsplash.com/300x225/?thanos',review));
    tempCard.push(this.values(this.generateNewId(),'Dreamcast',summary,210.00,'martin','https://source.unsplash.com/300x225/?anime',review));
    
    this.cards.push(...tempCard)
     return this.cards;
   }
   
   values(
     id:number,
     product: string,
     productSummary: string,
     price: number,
     sellerName:string,
     image:string,
     review:review,
     ):card{
    let temp={
      id:id,
      product: product,
      productSummary: productSummary,
      price: price,
      sellerName: sellerName,
      image: image,
      review:review
    }
    return temp;
   }
// end of helping functiong for seeding data

   addProduct(product:card):void{
    this.cards.push(product);
    this.router.navigate(['']);
   }
   HaveCards(){
    return (this.cards.length===0 ? true : false);
   }
   getCards(){
     return this.cards
   }
   generateNewId():number{
    return this.id++;
   }
   SelectedCardToReturnById(id:number):card{
    let foundCard:card;
    this.cards.forEach(card=>{
      if(card.id===id){
        foundCard=card;
      }
    });
     return foundCard;
   }

}
