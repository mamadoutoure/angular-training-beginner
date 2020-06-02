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
  {path: '', redirectTo: 'clients', pathMatch: 'full'},

  {
    path: 'clients',
    loadChildren: () => import('./client/client.module').then(m => m.ClientModule)
  },

  {
    path: 'commandes',
    loadChildren: () => import('./commande/commande.module').then(m => m.CommandeModule)
  },

  {path: '**', redirectTo: '/clients', pathMatch: 'full'}

];
export class AppRouting {

}


