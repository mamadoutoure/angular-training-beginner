import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ClientModel} from '../client/client.model';
import {ProductModel} from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = environment.apiUrl;
  productEndpoint = 'products/';



  constructor(private http: HttpClient) { }

  getProductList(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.apiUrl + this.productEndpoint);

  }

}
