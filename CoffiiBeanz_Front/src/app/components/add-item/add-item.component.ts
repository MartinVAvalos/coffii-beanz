import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
import {card} from '../../models/card'
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  card:card;
  
  constructor(
    public cardService:CardService
    ) {

   }

  ngOnInit() {
     this.card={id:null,product:null,price:null,sellerName:null, image:null}
  }
  // onSubmit(form:NgForm){
  
  //   let id=this.cardService.generateNewId();
    
  //   this.cardService.addProduct({id, ...form.value})
  // }

}
