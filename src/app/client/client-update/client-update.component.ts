import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientService} from '../client.service';
import {ClientModel} from '../client.model';
import {ClientBaseForm} from '../client-base-form';
import {ConfirmationDialogService} from '../../shared/confirmation-dialog.service';
import {ContactTypeService} from '../../contact-type/contact-type.service';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent extends ClientBaseForm  implements OnInit {

custCode: string;


  constructor(private clientService: ClientService,
              private router: Router, private activatedRoute: ActivatedRoute,
              private confDialog: ConfirmationDialogService,
              private cTypeService: ContactTypeService) {
    super(confDialog, cTypeService);
  }

  ngOnInit(): void {
    this.createForm();
    this.activatedRoute.params.subscribe( parm => {
      this.custCode = parm.id;
      this.getClientDetail(this.custCode);
    });
  }

  getClientDetail(customerCode: string): void{
    this.clientService.getClientByCode(customerCode).subscribe(
      (clientDetail) => {
         this.assignForm(clientDetail);
      },
      (error) => console.log(error)
    );
  }

  assignForm(client: ClientModel){
    this.customerCode.patchValue(client.customerCode);
    this.firstName.patchValue(client.firstName);
    this.lastName.patchValue(client.lastName);
    this.dob.patchValue(client.dob);
    this.pob.patchValue(client.pob);
    this.address.patchValue(client.address);
    client.contacts.forEach((contact) => {
      this.contacts.push(this.createContact(contact.contactCode, contact.contactValue));
    });
  }


  onRemoveContactEntry(i){
    const message = 'Voulez-vous vraiment supprimer ? ' + this.contacts.at(i).value.contactCode;
    this.onRemoveEntry(message, i);
  }


  submitForm() {
    console.log(this.clientForm.value);
    let client: ClientModel;
    client = this.clientForm.value;
    this.clientService.updateClient(client, this.custCode).subscribe(
      (resultat) => this.router.navigate(['/clients', 'client-list']),
      (error) => console.log(error)
    );

  }




}
