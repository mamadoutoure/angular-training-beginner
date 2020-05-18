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

  clientDetail(code: string) {
    this.router.navigate(['/client-detail', code]);
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

  removeClient(clientCode: string) {
    console.log(clientCode);

    this.confirmationDialogService.openConfirmDialog(
      'Voulez-vous vraiment supprimer ce client ? ' + clientCode)
      .afterClosed().subscribe(response => {
        console.log(response);
        if (response) {
          // appeler la suppression
      } else {
          // ne rien faire
      }
      // this.clientService.removeClient(clientId);

    });
  }//

  editClient(code) {

    this.router.navigate(['/client-edit', code]);
  }

  displayOrder(code) {
    this.router.navigate(['/client-commands', code]);
  }
}
