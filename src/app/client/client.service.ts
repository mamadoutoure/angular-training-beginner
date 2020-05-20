import { Injectable } from '@angular/core';
import {ClientModel} from './client.model';
import {Observable, of} from 'rxjs';
import {ContactModel} from './contact.model';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  apiUrl = environment.apiUrl;
  clientEndpoint = 'customers/';
  clientCreateEndpoint = 'save/customer/';
  clientUpdateEndpoint = 'update/customer/';


  constructor(private http: HttpClient) { }

  getClientList(): Observable<ClientModel[]> {
    return this.http.get<ClientModel[]>(this.apiUrl + this.clientEndpoint);

  }

  createClient(client: ClientModel){
    return this.http.post<ClientModel[]>(this.apiUrl + this.clientCreateEndpoint, client);

  }

  removeClient(clientId){

  }

  getClientByCode(customerCode: string): Observable<ClientModel>{
    return this.http.get<ClientModel>(this.apiUrl + this.clientEndpoint + customerCode);
  }

  updateClient(changedClient: ClientModel): Observable<any>{
    return this.http.post<any>(this.apiUrl + this.clientUpdateEndpoint, changedClient);

}
}
