import {OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {ConfirmationDialogService} from '../shared/confirmation-dialog.service';

export class CommandeBaseForm{
  commandForm: FormGroup;



  constructor(private confirmationDialogService: ConfirmationDialogService){}


  createForm(){
    this.commandForm = new FormGroup({
      commandCode: new FormControl(''),
      customerCode: new FormControl(''),
      customerName: new FormControl(''),
      commandDate: new FormControl(''),
      commandLinesItems: new FormArray([this.createCommandDetails()]
      )
    });
  }
  createCommandDetails(code= '', quantity= ''){
    return new FormGroup({
      productCode: new FormControl(code),
      productName: new FormControl(''),
      price: new FormControl(''),
      quantity: new FormControl(quantity)
    });
  }

  get commandCode(){
    return this.commandForm.get('commandCode');
  }

  get customerCode(){
    return this.commandForm.get('customerCode');
  }

  get commandDate(){
    return this.commandForm.get('commandDate');
  }

  get commandLinesItems(){
    return this.commandForm.get('commandLinesItems') as FormArray;
  }
  get quantity(){
    return this.commandLinesItems.get('quantity');
  }

  get productCode(){
    return this.commandLinesItems.get('productCode');
  }

  onAddCommandDetailEntry() {
    this.commandLinesItems.push(this.createCommandDetails());
  }

  onRemoveEntry(message: string, i: number) {

    this.confirmationDialogService.openConfirmDialog(
      message)
      .afterClosed().subscribe(response => {
      console.log(response);
      if (response) {
        this.commandLinesItems.removeAt(i);
      }
    });
  }


}
