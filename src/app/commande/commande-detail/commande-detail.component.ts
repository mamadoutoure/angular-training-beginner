import { Component, OnInit } from '@angular/core';
import {CommandModel} from '../commande.model';
import {CommandDtoModel} from '../commandeDto.model';
import {ActivatedRoute} from '@angular/router';
import {CommandService} from '../command.service';

@Component({
  selector: 'app-commande-detail',
  templateUrl: './commande-detail.component.html',
  styleUrls: ['./commande-detail.component.css']
})
export class CommandeDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private commandService: CommandService) { }
  comCode: string;
  commandeDto: CommandDtoModel;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( parm => {
      this.comCode = parm.id;
      this.getCommandDetail(this.comCode);
    });
  }

  totalCommandAmount(commadeLineItems: Array<any>): string {

    const total =  commadeLineItems.map(v => v.price * v.quantity).reduce((accumulator, currentValue) =>
      accumulator + currentValue);
    return total.toString();
  }


  getCommandDetail(commandCode: string){
    this.commandService.getCommandByCode(commandCode).subscribe(
      (commandDetail) => {
        this.commandeDto = commandDetail;
      },
      (error) => console.log(error)
    );
  }

}
