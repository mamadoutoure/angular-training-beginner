import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ConfirmationDialogService} from '../../shared/confirmation-dialog.service';
import {CommandService} from '../command.service';
import {CommandModel} from '../commande.model';
import {CommandDtoModel} from '../commandeDto.model';

@Component({
  selector: 'app-commande-list',
  templateUrl: './commande-list.component.html',
  styleUrls: ['./commande-list.component.css']
})
export class CommandeListComponent implements OnInit {

  commandes: CommandDtoModel[];
  constructor(private router: Router,
              private confirmationDialogService: ConfirmationDialogService,
              private commandService: CommandService
  ) { }

  ngOnInit(): void {
    this.getCommandist();
  }


  getCommandist() {
    this.commandService.getCommandList().subscribe(
      (retour) => {
        this.commandes = retour;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  totalCommandAmount(commadeLineItems: [any]): string {

    const total =  commadeLineItems.map(v => v.price * v.quantity).reduce((accumulator, currentValue) =>
      accumulator + currentValue);
    return total.toString();
  }



  editCommand(code: string){
    this.router.navigate(['/commande-edit', code]);
  }

  displayCommand(code){
    this.router.navigate(['/commande-detail', code]);
  }

  removeCommand(code: string){
    this.confirmationDialogService.openConfirmDialog(
      'Voulez-vous vraiment supprimer ce cette commande ? ' + code)
      .afterClosed().subscribe(response => {
      console.log(response);
      if (response) {
        this.commandService.removeCommand(code).subscribe(
          (retour) => {
            this.getCommandist();
          },
          (error) => {
            console.log(error);
            this.getCommandist();
          }
        );
      }


    });
  }

}
