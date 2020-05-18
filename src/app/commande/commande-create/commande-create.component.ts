import { Component, OnInit } from '@angular/core';
import {CommandeBaseForm} from '../commande-base-form';
import {ProductModel} from '../../product/product.model';

@Component({
  selector: 'app-commande-create',
  templateUrl: './commande-create.component.html',
  styleUrls: ['./commande-create.component.css']
})
export class CommandeCreateComponent extends CommandeBaseForm implements OnInit {

  selectedProduct: any;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.createForm();
  }


  submitForm(){}



}
