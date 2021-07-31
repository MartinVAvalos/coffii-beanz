import { Component, OnInit } from '@angular/core';
import {card} from '../../models/card';
import {CardService} from '../../services/card.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
   card:card;
   cards:card[];
  constructor(
    private cardServ:CardService,
    private router:Router
   ) {
   
    
   }

  ngOnInit(){
    // if(this.cardServ.HaveCards()){
    //   this.cards=this.cardServ.seed();
    // }
    // this.cards=this.cardServ.getCards();

    this.cards = [
      {
        id: 1,
        product: 'Bruce Almighty',
        productSummary: 'Luxurious Columbian coffee with a dark roast for a morning that will have you feeling mighty.',
        price: 29.99,
        sellerName: 'NA',
        image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg?quality=90&resize=960,872',
        reviews: [
         {
          name: "BestReview11",
          stars:4,
          comment:"Your product sucks balls id natus incidunt fugit numquam voluptates, consequatur, repudiandae, placeat molestiae!"
         } 
        ]
      }
    ]
  }
  cardSelected(singleCard){
    // this.router.navigate(['product/'+singleCard.id+'/view']);
    
  }

}
