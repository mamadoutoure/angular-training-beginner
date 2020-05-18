import {OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
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
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      pob: new FormControl('', Validators.required),
      address: new FormGroup({
        rue: new FormControl('', Validators.required),
        ville: new FormControl('', Validators.required),
        quartier: new FormControl('', Validators.required)
      }),
      contacts: new FormArray([this.createContact()]
      )
    });
  }
  createContact(type= '', value= ''){
    return new FormGroup({
      contactType: new FormControl(type, Validators.required),
      contactValue: new FormControl(value, Validators.required)
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


  get quartier() {
    return this.address.get('quartier');
  }

  get rue() {
    return this.address.get('rue');
  }

  get ville() {
    return this.address.get('ville');
  }

  get contactType() {
    return this.contacts.get('contactType');
  }

  get contactValue() {
    return this.contacts.get('contactValue');
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


  setError(control: AbstractControl){
    return {'is-invalid': control.invalid && this.clientForm.touched};
  }

}
