import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup} from '@angular/forms';
import {ClientModel} from '../client.model';
import {ClientService} from '../client.service';
import {Router} from '@angular/router';
import {ClientBaseForm} from '../client-base-form';
import {ConfirmationDialogService} from '../../shared/confirmation-dialog.service';
import {ContactTypeService} from '../../contact-type/contact-type.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent extends ClientBaseForm  implements OnInit {
  constructor(private clientService: ClientService,
              private router: Router,
              private confDialog: ConfirmationDialogService, private cTypeService: ContactTypeService) {
  super(confDialog, cTypeService);
  }


  ngOnInit(): void {
    this.createForm();
  }


  submitForm() {
    console.log(this.clientForm.value);
    let client: ClientModel;
    client = this.clientForm.value;
    client.customerCode = 'CLI-' + Date.now();
    this.clientService.createClient(client).subscribe(
      (resultat) => this.router.navigate(['/client-list']),
        (error) => console.log(error)
    );

  }


  onRemoveContactEntry(i){
    const message = 'Voulez-vous vraiment supprimer ? ' + this.contacts.at(i).value.contactCode;
    this.onRemoveEntry(message, i);
  }




}
