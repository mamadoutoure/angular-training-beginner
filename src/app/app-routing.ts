import {Routes} from '@angular/router';
import {ClientListComponent} from './client/client-list/client-list.component';
import {ClientCreateComponent} from './client/client-create/client-create.component';
import {ClientUpdateComponent} from './client/client-update/client-update.component';
import {ClientDetailComponent} from './client/client-detail/client-detail.component';
import {CommandeListComponent} from './commande/commande-list/commande-list.component';
import {CommandeCreateComponent} from './commande/commande-create/commande-create.component';
import {CommandeUpdateComponent} from './commande/commande-update/commande-update.component';
import {CommandeDetailComponent} from './commande/commande-detail/commande-detail.component';
import {ClientCommandsComponent} from './client/client-commands/client-commands.component';


export const APP_ROUTES: Routes = [
  {path: '', redirectTo: 'client-list', pathMatch: 'full'},
  {
    path: 'client-list', component: ClientListComponent
  },
  {
    path: 'client-create', component: ClientCreateComponent
  },
  {
    path: 'client-edit/:id', component: ClientUpdateComponent
  },

  {
    path: 'client-detail/:id', component: ClientDetailComponent
  },
  {
    path: 'client-commands/:id', component: ClientCommandsComponent
  },
  {
    path: 'commande-create', component: CommandeCreateComponent
  },
  {
    path: 'commande-edit/:id', component: CommandeUpdateComponent
  },
  {
    path: 'commande-detail/:id', component: CommandeDetailComponent
  },
  {
    path: 'commande-list', component: CommandeListComponent
  },

  {path: '**', redirectTo: 'list', pathMatch: 'full'}

];
export class AppRouting {

}
