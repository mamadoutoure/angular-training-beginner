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
    {code: 'p', description: 'Cellulaire'},
    {code: 'f', description: 'Fixe'},
    {code: 's', description: 'Skype'},
    {code: 'w', description: 'Whatsapp'},
    {code: 'ft', description: 'FaceTime'}
  ];
  constructor(private clientService: ClientService,
              private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.createForm();

    const client = this.clientService.getClientById(+this.route.snapshot.params.id);
    this.clientForm.patchValue(client);
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

  submitForm() {
    console.log(this.clientForm.value);
    let client = new ClientModel();
    client = this.clientForm.value;
    this.clientService.updateClient(this.clientForm.value);
    this.router.navigate(['list']);

  }




}
