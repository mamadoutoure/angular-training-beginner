import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ClientService} from '../client.service';
import {ClientModel} from '../client.model';
import {ConfirmationDialogService} from '../../shared/confirmation-dialog.service';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: ClientModel[];

  constructor(private router: Router,
              private clientService: ClientService,
              private confirmationDialogService: ConfirmationDialogService) {
  }


  ngOnInit(): void {
    this.getClientList();
  }

  clientDetail(customerCode: string) {
    this.router.navigate(['client-detail', customerCode]);
  }

  getClientList() {
    this.clientService.getClientList().subscribe(
      (retour) => {
        this.clients = retour;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  removeClient(customerCode: string) {
    console.log(customerCode);

    this.confirmationDialogService.openConfirmDialog(
      'Voulez-vous vraiment supprimer ce client ? ' + customerCode)
      .afterClosed().subscribe(response => {
        console.log(response);
        if (response) {
          this.clientService.removeClient(customerCode).subscribe(
            (retour) => {
              this.getClientList();
              //this.router.navigate(['/client-list']);
            },
            (error) => {
              console.log(error);
              this.getClientList();
            }
          );
        }

    });
  }//

  editClient(code) {

    this.router.navigate(['/client-edit', code]);
  }

  displayOrder(code) {
    this.router.navigate(['/client-commands', code]);
  }
}
