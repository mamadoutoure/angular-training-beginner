import { Component, OnInit } from '@angular/core';
import {CommandeBaseForm} from '../commande-base-form';
import {CommandModel} from '../commande.model';
import {ConfirmationDialogService} from '../../shared/confirmation-dialog.service';

@Component({
  selector: 'app-commande-update',
  templateUrl: './commande-update.component.html',
  styleUrls: ['./commande-update.component.css']
})
export class CommandeUpdateComponent  extends CommandeBaseForm implements OnInit {

  commandeToModify: CommandModel = {
    code: '2344',
    clientCode: '4',
    commandDate: '2020-05-19',
    commandDetails: [
      {
        productCode: '54t',
        quantity: 12
      },
      {
        productCode: '543d',
        quantity: 11
      }
    ]
  };
  constructor(private confDialog: ConfirmationDialogService) {
    super(confDialog);
  }

  ngOnInit(): void {
    this.createForm();

    this.code.patchValue(this.commandeToModify.code);
    this.clientCode.patchValue(this.commandeToModify.clientCode);
    this.commandDate.patchValue(this.commandeToModify.commandDate);
    this.commandeToModify.commandDetails.forEach((detail) =>
    {this.commandDetails.push(this.createCommandDetails(detail.productCode, detail.quantity.toString()));
    });
  }



  submitForm(){

  }

  onRemoveCommandDetailEntry(i: number) {
    const message = 'Voulez-vous vraiment supprimer ? ' + this.commandDetails.at(i).value.productCode;
    this.onRemoveEntry(message, i);
  }
}
