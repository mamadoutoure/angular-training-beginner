import {OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

export class CommandeBaseForm{
  commandForm: FormGroup;

  products = [
    {
      code: '23f',
      productName: 'Orange',
      productPrice: 7.5
    },
    {
      code: '54t',
      productName: 'Pomme',
      productPrice: 4.87
    },
    {
      code: '98j',
      productName: 'Poire',
      productPrice: 7
    },
    {
      code: '543d',
      productName: 'Banane',
      productPrice: 3.5
    },
    {
      code: '099d',
      productName: 'Mandarine',
      productPrice: 3.99
    }
  ];
  constructor(){

  }


  createForm(){
    this.commandForm = new FormGroup({
      code: new FormControl(''),
      clientCode: new FormControl(''),
      commandDate: new FormControl(''),
      commandDetails: new FormArray([this.createCommandDetails()]
      )
    });
  }
  createCommandDetails(code= '', quantity= ''){
    return new FormGroup({
      productCode: new FormControl(code),
      quantity: new FormControl(quantity)
    });
  }

  get code(){
    return this.commandForm.get('code');
  }

  get clientCode(){
    return this.commandForm.get('clientCode');
  }

  get commandDate(){
    return this.commandForm.get('commandDate');
  }

  get commandDetails(){
    return this.commandForm.get('commandDetails') as FormArray;
  }
  get quantity(){
    return this.commandDetails.get('quantity');
  }

  get productCode(){
    return this.commandDetails.get('productCode');
  }

  onAddCommandDetailEntry() {
    this.commandDetails.push(this.createCommandDetails());
  }

  onRemoveCommandDetailEntry(i: number) {
    this.commandDetails.removeAt(i);
  }


}
