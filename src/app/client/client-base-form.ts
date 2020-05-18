import {OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {ConfirmationDialogService} from '../shared/confirmation-dialog.service';

export class ClientBaseForm{
  clientForm: FormGroup;
  contactCategories = [
    {code: 'CEL', description: 'Cellulaire'},
    {code: 'FIX', description: 'Fixe'},
    {code: 'SKY', description: 'Skype'},
    {code: 'EMA', description: 'Email'},
    {code: 'WHA', description: 'Whatsapp'},
    {code: 'FAC', description: 'FaceTime'}
  ];
  constructor(private confirmationDialogService: ConfirmationDialogService){}


  createForm(){
    this.clientForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      dob: new FormControl(''),
      pob: new FormControl(''),
      address: new FormGroup({
        rue: new FormControl(''),
        ville: new FormControl(''),
        quartier: new FormControl('')
      }),
      contacts: new FormArray([this.createContact()]
      )
    });
  }
  createContact(type= '', value= ''){
    return new FormGroup({
      contactType: new FormControl(type),
      contactValue: new FormControl(value)
    });
  }

  get firstName(){
    return this.clientForm.get('firstName');
  }

  get lastName(){
    return this.clientForm.get('lastName');
  }

  get dob(){
    return this.clientForm.get('dob');
   }

   get pob(){
     return this.clientForm.get('pob');
   }
  get address(){
    return this.clientForm.get('address');
  }

  get contacts(): FormArray {
    return this.clientForm.get('contacts') as FormArray;
  }

  onAddContactEntry() {
    (this.clientForm.get('contacts') as FormArray).push(this.createContact());
  }


  onRemoveEntry(message: string, i: number) {

    this.confirmationDialogService.openConfirmDialog(
      message)
      .afterClosed().subscribe(response => {
      console.log(response);
      if (response) {
        this.contacts.removeAt(i);
      }
    });
  }

}
