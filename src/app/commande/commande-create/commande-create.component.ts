import { Component, OnInit } from '@angular/core';
import {CommandeBaseForm} from '../commande-base-form';
import {ProductModel} from '../../product/product.model';
import {ConfirmationDialogService} from '../../shared/confirmation-dialog.service';

@Component({
  selector: 'app-commande-create',
  templateUrl: './commande-create.component.html',
  styleUrls: ['./commande-create.component.css']
})
export class CommandeCreateComponent extends CommandeBaseForm implements OnInit {

  selectedProduct: any;

  constructor(private confDialog: ConfirmationDialogService) {
    super(confDialog);
  }

  ngOnInit(): void {
    this.createForm();
  }


  submitForm(){}
  onRemoveCommandDetailEntry(i: number) {
    const message = 'Voulez-vous vraiment supprimer ? ' + this.commandDetails.at(i).value.productCode;
    this.onRemoveEntry(message, i);
  }


}
