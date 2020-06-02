import { Injectable } from '@angular/core';
import {ClientModel} from './client.model';
import {Observable, of} from 'rxjs';
import {ContactModel} from '../contact-type/contact.model';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ClientService {
  apiUrl = environment.apiUrl;
  clientEndpoint = 'customers/';
  clientCreateEndpoint = 'customer/';
  clientUpdateEndpoint = 'customer/';


  constructor(private http: HttpClient) { }

  getClientList(): Observable<ClientModel[]> {
    return this.http.get<ClientModel[]>(this.apiUrl + this.clientEndpoint);

  }

  createClient(client: ClientModel){
    return this.http.post<ClientModel[]>(this.apiUrl + this.clientCreateEndpoint, client);

  }

  removeClient(customerCode): Observable<any>{
    return this.http.delete<any>(this.apiUrl + this.clientEndpoint + customerCode);

  }

  getClientByCode(customerCode: string): Observable<ClientModel>{
    return this.http.get<ClientModel>(this.apiUrl + this.clientEndpoint + customerCode);
  }

  updateClient(changedClient: ClientModel, customerCode: string): Observable<any>{
    return this.http.put<any>(this.apiUrl + this.clientUpdateEndpoint + customerCode, changedClient);

  }

  getCommandsByClientCode(customerCode: string): Observable<any> {

      return this.http.get<any>(this.apiUrl + this.clientEndpoint + customerCode + '/commands');
  }
}

