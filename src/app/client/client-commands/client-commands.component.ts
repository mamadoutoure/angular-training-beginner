import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientService} from '../client.service';

@Component({
  selector: 'app-client-commands',
  templateUrl: './client-commands.component.html',
  styleUrls: ['./client-commands.component.css']
})
export class ClientCommandsComponent implements OnInit {


  clientCommandsDto: any;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private clientService: ClientService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( parm => {
      const customerCode = parm.id;
      this.getClientCommands(customerCode);
    });
  }

  totalCommandAmount(commadeLineItems: Array<any>): string {

    const total =  commadeLineItems.map(line => line.price * line.quantity).reduce((accumulator, currentValue) =>
      accumulator + currentValue);
    return total.toString();
  }

  totalCommands(commands: Array<any>){

    const listCommand =  commands.map( commad =>  this.mapDetails(commad.commandLinesItems));

    const total =  [].concat(...listCommand).reduce((accumulator, currentValue) =>
      accumulator + currentValue);
    return total;
  }

  mapDetails(lineDetails){

    return lineDetails.map( line =>   line.price * line.quantity);
  }

  displayDetailCommand(commandCode: string){

    this.router.navigate(['/commande-detail', commandCode]);
  }

  getClientCommands(customerCode: string){
    this.clientService.getCommandsByClientCode(customerCode).subscribe(
      (data) => {
        this.clientCommandsDto = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
