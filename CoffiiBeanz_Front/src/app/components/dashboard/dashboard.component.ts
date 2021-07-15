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
    if(this.cardServ.HaveCards()){
      this.cards=this.cardServ.seed();
    }
    this.cards=this.cardServ.getCards();
  }
  cardSelected(singleCard){
    this.router.navigate(['product/'+singleCard.id+'/view']);
    
  }

}
