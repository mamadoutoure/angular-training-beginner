import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {
clientDetailDto = {
  clientCode: 'CL-002',
  firstName: 'Mamadou',
  lastName: 'Toure',
  dob: '2020-05-14',
  pob: 'Kaedi',
  address: {
    rue: 'Armand-Viau',
    ville: 'Quebec',
    quartier: 'Val-Belair'
  },
  contacts: [
    {
      contactCode: 'CEL',
      name: 'Cellulaire',
      contactValue: '583-874-9898'
    },
    {
      contactCode: 'EMA',
      name: 'Email',
      contactValue: 'mamadou.toure@yahoo.com'
    }
  ]
}
  constructor() { }

  ngOnInit(): void {
  }

}
