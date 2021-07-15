import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/services/card.service';
import {card} from '../../models/card';

@Component({
  selector: 'app-itemselected',
  templateUrl: './itemselected.component.html',
  styleUrls: ['./itemselected.component.scss']
})
export class ItemselectedComponent implements OnInit {
  card:card=null;

  constructor(
    private cardServ:CardService,
    private router:Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(){
    let cardIdNumber=Number(this.route.snapshot.params['id']);
    this.card=this.cardServ.SelectedCardToReturnById(cardIdNumber);
    console.log(this.card);
   
  }

}
