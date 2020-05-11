import { Injectable } from '@angular/core';
import {ClientModel} from './client.model';
import {Observable, of} from 'rxjs';
import {ContactModel} from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clientList: ClientModel[] = [
    {id: 1,
      firstName: 'Mamadou',
      lastName: 'Toure',
      dob: '1960/12/11',
      pob: 'Kaedi',
      address: {
        streetName: '131 Britannia',
        city: 'Gatineau',
        district: 'Outaouais'
      },
      contacts: [
        {
         contactType: 'cell',
         contactValue: '581-777-5570'
        },
        {
          contactType: 'email',
          contactValue: 'mamadou_toure@yahoo.com'
        },
        {
          contactType: 'fix',
          contactValue: '613-560-9810'
        },
        {
          contactType: 'facetime',
          contactValue: 'mtoure'
        }

      ]

    },
    {id: 2,
      firstName: 'Joseph',
      lastName: 'Ade',
      dob: '1950/10/11',
      pob: 'Lome',
      address: {
        streetName: '131 Rue du Bonheur',
        city: 'Trois-Rivieres',
        district: 'Les Marais'
      },
      contacts: [
        {
          contactType: 'cell',
          contactValue: '819-675-5530'
        },
        {
          contactType: 'email',
          contactValue: 'joade@yahoo.com'
        },
        {
          contactType: 'fix',
          contactValue: '514-560-9000'
        },
        {
          contactType: 'facetime',
          contactValue: 'joadesko'
        }

      ]
    },
    {id: 3,
      firstName: 'Fadel',
      lastName: 'Toure',
      dob: '1930/12/08',
      pob: 'Kaedi',
      address: {
        streetName: '56 Rue des papillons Rose',
        city: 'Montreal',
        district: 'Rive Sud'
      },
      contacts: [
        {
          contactType: 'cell',
          contactValue: '819-449-5870'
        },
        {
          contactType: 'email',
          contactValue: 'ftoure@yahoo.com'
        },
        {
          contactType: 'fix',
          contactValue: '581-234-6578'
        },
        {
          contactType: 'facetime',
          contactValue: 'ftoure'
        }

      ]
    },
  ];

  constructor() { }

  getClientList(): Observable<ClientModel[]>{
    return of(this.clientList);
  }

  createClient(client: ClientModel){
    const lastObject: ClientModel = this.clientList.reduce((prev, curr) => (prev.id > curr.id) ? prev : curr);
    const newId = lastObject.id + 1;
    client.id = newId;
    this.clientList.push(client);

  }

  removeClient(clientId){
    const newList = this.clientList.filter((client) =>   client.id !== clientId);
    this.clientList = [...newList];
  }

  getClientById(clientId): ClientModel{
    return this.clientList.filter( (client) =>   client.id === clientId)[0];
  }

  updateClient(newClient: ClientModel, id: number){
    //const clientId = newClient.id;
    const idx = this.clientList.findIndex(client => client.id === id);
    if (idx !== -1) {
      newClient.id = id;
      this.clientList[idx] = newClient;
    }
}
}
