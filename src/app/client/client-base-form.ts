import {OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

export class ClientBaseForm{
  clientForm: FormGroup;
  contactCategories = [
    {code: 'cell', description: 'Cellulaire'},
    {code: 'fix', description: 'Fixe'},
    {code: 'skype', description: 'Skype'},
    {code: 'email', description: 'Email'},
    {code: 'whatsapp', description: 'Whatsapp'},
    {code: 'facetime', description: 'FaceTime'}
  ];
  constructor(){

  }


  createForm(){
    this.clientForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      dob: new FormControl(''),
      pob: new FormControl(''),
      address: new FormGroup({
        streetName: new FormControl(''),
        city: new FormControl(''),
        district: new FormControl('')
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

  onAddContactEntry() {
    (this.clientForm.get('contacts') as FormArray).push(this.createContact());
  }

  onRemoveContactEntry(i: number) {
    const curContactControl  = this.clientForm.get('contacts') as FormArray;
    curContactControl.removeAt(i);
  }

}
