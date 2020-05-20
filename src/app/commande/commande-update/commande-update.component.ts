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

  commandeToModify: CommandModel;
  constructor(private confDialog: ConfirmationDialogService) {
    super(confDialog);
  }

  ngOnInit(): void {
    this.createForm();

    this.commandCode.patchValue(this.commandeToModify.commandCode);
    this.customerCode.patchValue(this.commandeToModify.customerCode);
    this.commandDate.patchValue(this.commandeToModify.commandDate);
    this.commandeToModify.commandDetails.forEach((detail) =>
    {this.commandLinesItems.push(this.createCommandDetails(detail.productCode, detail.quantity.toString()));
    });
  }



  submitForm(){

  }

  onRemoveCommandDetailEntry(i: number) {
    const message = 'Voulez-vous vraiment supprimer ? ' + this.commandLinesItems.at(i).value.productCode;
    this.onRemoveEntry(message, i);
  }
}
