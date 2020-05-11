import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup} from '@angular/forms';
import {ClientModel} from '../client.model';
import {ClientService} from '../client.service';
import {Router} from '@angular/router';
import {ClientBaseForm} from '../client-base-form';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent extends ClientBaseForm  implements OnInit {
  constructor(private clientService: ClientService,
              private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.createForm();
  }


  submitForm() {
    console.log(this.clientForm.value);
    let client: ClientModel;
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




}
