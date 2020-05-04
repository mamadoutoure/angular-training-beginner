import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientService} from '../client.service';
import {ClientModel} from '../client.model';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

  clientForm: FormGroup;

  contactCategories = [
    {code: 'cell', description: 'Cellulaire'},
    {code: 'fix', description: 'Fixe'},
    {code: 'skype', description: 'Skype'},
    {code: 'email', description: 'Email'},
    {code: 'whatsapp', description: 'Whatsapp'},
    {code: 'facetime', description: 'FaceTime'}
  ];
  constructor(private clientService: ClientService,
              private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.createForm();

    const client: ClientModel = this.clientService.getClientById(+this.route.snapshot.params.id);
    this.clientForm.get('firstName').patchValue(client.firstName);
    this.clientForm.get('lastName').patchValue(client.lastName);
    this.clientForm.get('dob').patchValue(client.dob);
    this.clientForm.get('pob').patchValue(client.pob);
    this.clientForm.get('address').patchValue(client.address);
    client.contacts.forEach((contact) => {
      this.contacts.push(this.createContact(contact.contactType, contact.contactValue));
    });

  }

  get contacts(): FormArray {
    return this.clientForm.get('contacts') as FormArray;
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

  submitForm() {
    console.log(this.clientForm.value);
    let client = new ClientModel();
    client = this.clientForm.value;
    this.clientService.updateClient(this.clientForm.value, +this.route.snapshot.params.id);
    this.router.navigate(['list']);

  }




}
