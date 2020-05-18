import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client-commands',
  templateUrl: './client-commands.component.html',
  styleUrls: ['./client-commands.component.css']
})
export class ClientCommandsComponent implements OnInit {


  clientCommandsDto  = {
    clientCode: 'CLI-009',
    clientName: 'Mamadou Toure',
    commands: [
      {
        commandCode: '2344',
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
      },


      {
        commandCode: '6753',
        commandDate: '2020-03-21',
        commandDetails: [
          {
            productName: 'Mandarine',
            productPrice: 3.5,
            quantity: 7
          },
          {
            productName: 'Goyave',
            productPrice: 8.37,
            quantity: 6
          }
        ]
      }

    ]
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  totalCommandAmount(commadeLineItems: Array<any>): string {

    const total =  commadeLineItems.reduce((accumulator, currentValue) =>
      (accumulator.productPrice * accumulator.quantity) + (currentValue.productPrice * currentValue.quantity));
    return total;
  }

  totalCommands(commands: Array<any>){
    const total =  commands.reduce((accumulator, currentValue) =>
      (this.totalCommandAmount(accumulator.commandDetails)
        + (this.totalCommandAmount(currentValue.commandDetails))));
    return total;
  }

  displayDetailCommand(commandCode: string){

    this.router.navigate(['/commande-detail', commandCode]);
  }

}
