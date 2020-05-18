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
  getEndpoint = 'clients';
  constructor(private http: HttpClient) { }

  getClientList(): Observable<ClientModel[]> {
    return this.http.get<ClientModel[]>(this.apiUrl + this.getEndpoint);

  }

  createClient(client: ClientModel){


  }

  removeClient(clientId){

  }

  getClientById(clientId): ClientModel{
    return null;
  }

  updateClient(newClient: ClientModel, id: number){

}
}
