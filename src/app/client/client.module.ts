import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClientListComponent} from './client-list/client-list.component';
import {ClientCreateComponent} from './client-create/client-create.component';
import {ClientUpdateComponent} from './client-update/client-update.component';
import {ClientDetailComponent} from './client-detail/client-detail.component';
import {CommandeDetailComponent} from '../commande/commande-detail/commande-detail.component';
import {ClientCommandsComponent} from './client-commands/client-commands.component';
import {ContactTypeComponent} from '../contact-type/contact-type.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {ClientRoutingModule} from './client-routing.module';
import {ClientService} from './client.service';
import {ContactTypeService} from '../contact-type/contact-type.service';




@NgModule({
  declarations: [
    ClientListComponent,
    ClientCreateComponent,
    ClientUpdateComponent,
    ClientDetailComponent,
    ClientCommandsComponent,
    ContactTypeComponent,


  ],
  imports: [
    SharedModule,
    ClientRoutingModule
   // CommonModule

  ],
  providers: [ClientService, ContactTypeService]
})
export class ClientModule { }
