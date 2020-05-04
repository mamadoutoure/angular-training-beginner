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
      address: '131 Britannia',
      contacts: [
        {contactId: 1,
         contactType: 'cell',
         contactValue: '581-777-5570'
        },
        {contactId: 2,
          contactType: 'email',
          contactValue: 'mamadou_toure@yahoo.com'
        },
        {contactId: 3,
          contactType: 'fix',
          contactValue: '613-560-9810'
        },
        {contactId: 4,
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
      address: '131 rue du Bonheur',
      contacts: [
        {contactId: 1,
          contactType: 'cell',
          contactValue: '819-675-5530'
        },
        {contactId: 2,
          contactType: 'email',
          contactValue: 'joade@yahoo.com'
        },
        {contactId: 3,
          contactType: 'fix',
          contactValue: '514-560-9000'
        },
        {contactId: 4,
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
      address: '43 Rue des papilons Roses',
      contacts: [
        {contactId: 1,
          contactType: 'cell',
          contactValue: '819-449-5870'
        },
        {contactId: 2,
          contactType: 'email',
          contactValue: 'ftoure@yahoo.com'
        },
        {contactId: 3,
          contactType: 'fix',
          contactValue: '581-234-6578'
        },
        {contactId: 4,
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
