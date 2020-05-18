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

client = {
  clientCode: 'CL-002',
  firstName: 'Mamadou',
  lastName: 'Toure',
  dob: '2020-05-14',
  pob: 'Kaedi',
  address: {
    rue: 'Armand-Viau',
    ville: 'Quebec',
    quartier: 'Val-Belair'
  },
  contacts: [
    {
      contactCode: 'CEL',
      name: 'Cellulaire',
      contactValue: '583-874-9898'
    },
    {
      contactCode: 'EMA',
      name: 'Email',
      contactValue: 'mamadou.toure@yahoo.com'
    }
  ]
};


  constructor(private clientService: ClientService,
              private router: Router, private route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.createForm();

    //const client: ClientModel = this.clientService.getClientById(+this.route.snapshot.params.id);
    this.firstName.patchValue(this.client.firstName);
    this.lastName.patchValue(this.client.lastName);
    this.dob.patchValue(this.client.dob);
    this.pob.patchValue(this.client.pob);
    this.address.patchValue(this.client.address);
    this.client.contacts.forEach((contact) => {
      this.contacts.push(this.createContact(contact.contactCode, contact.contactValue));
    });

  }





  submitForm() {
    console.log(this.clientForm.value);
    let client: ClientModel;
    client = this.clientForm.value;
    this.clientService.updateClient(this.clientForm.value, +this.route.snapshot.params.id);
    this.router.navigate(['list']);

  }




}
