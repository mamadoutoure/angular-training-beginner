import { Component, OnInit } from '@angular/core';
import {CommandModel} from '../commande.model';

@Component({
  selector: 'app-commande-detail',
  templateUrl: './commande-detail.component.html',
  styleUrls: ['./commande-detail.component.css']
})
export class CommandeDetailComponent implements OnInit {

  constructor() { }

  commandeDto  = {
    commandCode: '2344',
    clientName: 'Mamadou Toure',
    commandDate: '2020-05-19',
    commandDetails: [
      {
        productName: 'Orange',
        productPrice: 6.5,
        quantity: 12
      },
      {
        productName: 'Banane',
        productPrice: 3.45,
        quantity: 11
      }
    ]
  };

  ngOnInit(): void {
  }

  totalCommandAmount(commadeLineItems: Array<any>): string {

    const total =  commadeLineItems.reduce((accumulator, currentValue) =>
      (accumulator.productPrice * accumulator.quantity) + (currentValue.productPrice * currentValue.quantity));
    return total;
  }

}
