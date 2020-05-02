import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients = [
    {id: 1, firstName: 'Mamadou', lastName: 'Toure', dob: '1960/12/11', pob: 'Kaedi', address: '131 Britannia', contactValue: '581-777-5570'},
    {id: 2, firstName: 'Joseph', lastName: 'Ade', dob: '1950/10/11', pob: 'Lome', address: '131 rue du Bonheur', contactValue: '819-985-5570'},
    {id: 3, firstName: 'Fadel', lastName: 'Toure', dob: '1930/12/08', pob: 'Kaedi', address: '43 Rue des papilons Roses', contactValue: 'ftoure@gmail.com'},
  ];
  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  clientDetail(id: number){
    this.router.navigate(['client', id]);
  }
}
