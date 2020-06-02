import { Component, OnInit } from '@angular/core';
import {CommandeBaseForm} from '../commande-base-form';
import {CommandModel} from '../commande.model';
import {ConfirmationDialogService} from '../../shared/confirmation-dialog.service';
import {CommandService} from '../command.service';
import {ClientService} from '../../client/client.service';
import {ProductService} from '../../product/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientModel} from '../../client/client.model';
import {ProductModel} from '../../product/product.model';
import {CommandDtoModel} from '../commandeDto.model';

@Component({
  selector: 'app-commande-update',
  templateUrl: './commande-update.component.html',
  styleUrls: ['./commande-update.component.css']
})
export class CommandeUpdateComponent  extends CommandeBaseForm implements OnInit {
  commCode: string;
  clientList: ClientModel[];
  products: ProductModel[];
  constructor(private confDialog: ConfirmationDialogService,
              private commandService: CommandService,
              private clientService: ClientService,
              private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private router: Router) {
    super(confDialog);
  }

  ngOnInit(): void {
    this.getClientList();
    this.getProductList();
    this.createForm();

    this.activatedRoute.params.subscribe( parm => {
      this.commCode = parm.id;
      this.getCommandDetail(this.commCode);
    });



  }


  getCommandDetail(commandCode: string): void{
    this.commandService.getCommandByCode(commandCode).subscribe(
      (commandDetail) => {
        this.assignForm(commandDetail);
      },
      (error) => console.log(error)
    );
  }

  assignForm(commandToModify: CommandDtoModel){
    this.commandCode.patchValue(commandToModify.commandCode);
    this.customerCode.patchValue(commandToModify.customerCode);
    this.commandDate.patchValue(commandToModify.commandDate);
    commandToModify.commandLinesItems.forEach((detail) =>
    {this.commandLinesItems.push(this.createCommandDetails(detail.productCode, detail.quantity.toString()));
    });
  }


  submitForm(){
    console.log(this.commandForm.value);
    let command: CommandDtoModel;
    command = this.commandForm.value;
    this.commandService.updateCommand(command, this.commCode).subscribe(
      (resultat) => this.router.navigate(['/commandes', 'commande-list']),
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
