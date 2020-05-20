import { Component, OnInit } from '@angular/core';
import {CommandeBaseForm} from '../commande-base-form';
import {ProductModel} from '../../product/product.model';
import {ConfirmationDialogService} from '../../shared/confirmation-dialog.service';
import {ClientModel} from '../../client/client.model';
import {CommandModel} from '../commande.model';
import {ClientService} from '../../client/client.service';
import {CommandService} from '../command.service';
import {Router} from '@angular/router';
import {ProductService} from '../../product/product.service';

@Component({
  selector: 'app-commande-create',
  templateUrl: './commande-create.component.html',
  styleUrls: ['./commande-create.component.css']
})
export class CommandeCreateComponent extends CommandeBaseForm implements OnInit {

  clientList: ClientModel[];
   products: ProductModel[];

  constructor(private confDialog: ConfirmationDialogService,
              private commandService: CommandService,
              private clientService: ClientService,
              private productService: ProductService,
              private router: Router) {
    super(confDialog);
  }

  ngOnInit(): void {
    this.getClientList();
    this.getProductList();
    this.createForm();
  }


  submitForm(){
    console.log(this.commandForm.value);
    let command: CommandModel;
    command = this.commandForm.value;
    command.commandCode = 'COM-' + Date.now();
    this.commandService.createCommand(command).subscribe(
      (resultat) => this.router.navigate(['/commande-list']),
      (error) => console.log(error)
    );

  }




  onRemoveCommandDetailEntry(i: number) {
    const message = 'Voulez-vous vraiment supprimer ? ' + this.commandLinesItems.at(i).value.productCode;
    this.onRemoveEntry(message, i);
  }

  getClientList() {
    this.clientService.getClientList().subscribe(
      (retour) => {
        this.clientList = retour;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getProductList() {
    this.productService.getProductList().subscribe(
      (retour) => {
        this.products = retour;
      },
      (error) => {
        console.log(error);
      }
    );
  }


}
