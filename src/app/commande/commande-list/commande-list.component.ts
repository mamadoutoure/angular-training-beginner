import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-commande-list',
  templateUrl: './commande-list.component.html',
  styleUrls: ['./commande-list.component.css']
})
export class CommandeListComponent implements OnInit {

  commandes =  [
    {
      commandCode: 2435,
      client: {
        clientCode: 3,
        firstName: 'Mamadou',
        lastName: 'Toure'
      },
      commandDate: '2020-05-11',
      commandLineItems: [
        {
          productName: 'Orange',
          productPrice: 15,
          quantity: 5
        },
        {
          productName: 'Pomme',
          productPrice: 12.65,
          quantity: 8
        }
        ]

     },
    {
      commandCode: 7863,
      client: {
        clientCode: 6,
        firstName: 'Fadel',
        lastName: 'Toure'
      },
      commandDate: '2020-02-11',
      commandLineItems: [
        {
          productName: 'Banane',
          productPrice: 7.5,
          quantity: 15
        },
        {
          productName: 'Dattes',
          productPrice: 8.95,
          quantity: 6
        }
        ]
    }
    ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  totalCommandAmount(commadeLineItems: [any]): string {

    const total =  commadeLineItems.reduce((accumulator, currentValue) =>
      (accumulator.productPrice * accumulator.quantity) + (currentValue.productPrice * currentValue.quantity));
    return total;
  }



  editCommand(code: string){
    this.router.navigate(['/commande-edit', code]);
  }

  displayCommand(code){
    this.router.navigate(['/commande-detail', code]);
  }

}
