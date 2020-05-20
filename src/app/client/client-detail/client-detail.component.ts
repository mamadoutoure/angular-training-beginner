import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ClientService} from '../client.service';
import {ClientModel} from '../client.model';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {
clientDetailDto: ClientModel;
  constructor(private activatedRoute: ActivatedRoute , private clientService: ClientService) { }

  ngOnInit(): void {

   this.activatedRoute.params.subscribe( parm => {
     const customerCode = parm.id;
     this.getClientDetail(customerCode);
   });

  }


  getClientDetail(customerCode: string): void{
   this.clientService.getClientByCode(customerCode).subscribe(
     (clientDetail) => {
       this.clientDetailDto = clientDetail;
     },
     (error) => console.log(error)
   );
  }

}
