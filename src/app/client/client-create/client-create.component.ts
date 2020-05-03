import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup} from '@angular/forms';
import {ClientModel} from '../client.model';
import {ClientService} from '../client.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {
  clientForm: FormGroup;

  contactCategories = [
    {code: 'p', description: 'Cellulaire'},
    {code: 'f', description: 'Fixe'},
    {code: 's', description: 'Skype'},
    {code: 'w', description: 'Whatsapp'},
    {code: 'ft', description: 'FaceTime'}
  ];
  constructor(private clientService: ClientService,
              private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }


  createForm(){
    this.clientForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      dob: new FormControl(''),
      pob: new FormControl(''),
      address: new FormControl(''),
      contacts: new FormArray([this.createContact()]
      )
    });
  }

  submitForm() {
    console.log(this.clientForm.value);
    let client = new ClientModel();
    client = this.clientForm.value;
    this.clientService.createClient(this.clientForm.value);
    this.router.navigate(['list']);

  }

  createContact(){
    return new FormGroup({
      contactType: new FormControl(''),
      contactValue: new FormControl('')
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
