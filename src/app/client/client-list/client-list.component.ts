import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ClientService} from '../client.service';
import {ClientModel} from '../client.model';
import {error} from 'selenium-webdriver';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: ClientModel[];

  constructor(private router: Router, private clientService: ClientService) { }


  ngOnInit(): void {
    this.getClientList();
  }

  clientDetail(code: string){
    this.router.navigate(['/client-detail', code]);
  }

  getClientList() {
    this.clientService.getClientList().subscribe(
      (retour) => {this.clients = retour; },
      (error) => {console.log(error); }
    );
  }

  removeClient(clientId: number) {
    console.log(clientId);
    this.clientService.removeClient(clientId);
   // this.router.navigate(['/list']);
    this.getClientList();
    // this.router.navigate(['list']);

    }

  editClient(code){

    this.router.navigate(['/client-edit', code]);
  }
  displayOrder(code) {
    this.router.navigate(['/client-commands', code]);
  }
}
