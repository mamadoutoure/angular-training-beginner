import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientService} from '../client.service';
import {ClientModel} from '../client.model';
import {ClientBaseForm} from '../client-base-form';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent extends ClientBaseForm  implements OnInit {




  constructor(private clientService: ClientService,
              private router: Router, private route: ActivatedRoute) {
    super();
  }

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



  submitForm() {
    console.log(this.clientForm.value);
    let client: ClientModel;
    client = this.clientForm.value;
    this.clientService.updateClient(this.clientForm.value, +this.route.snapshot.params.id);
    this.router.navigate(['list']);

  }




}
