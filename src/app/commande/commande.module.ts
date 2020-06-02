import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommandeListComponent} from './commande-list/commande-list.component';
import {CommandeCreateComponent} from './commande-create/commande-create.component';
import {CommandeUpdateComponent} from './commande-update/commande-update.component';
import {CommandeDetailComponent} from './commande-detail/commande-detail.component';
import {SharedModule} from '../shared/shared.module';
import {CommandeRoutingModule} from './commande-routing.module';
import {CommandService} from './command.service';



@NgModule({
  declarations: [
    CommandeListComponent,
    CommandeCreateComponent,
    CommandeUpdateComponent,
    CommandeDetailComponent,

  ],
  imports: [
    //CommonModule,
    SharedModule,
    CommandeRoutingModule,
  ],
  providers: [CommandService]
})
export class CommandeModule { }
