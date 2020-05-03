import {Routes} from '@angular/router';
import {ClientListComponent} from './client/client-list/client-list.component';
import {ClientCreateComponent} from './client/client-create/client-create.component';
import {ClientUpdateComponent} from './client/client-update/client-update.component';


export const APP_ROUTES: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {
    path: 'list', component: ClientListComponent
  },
  {
    path: 'create', component: ClientCreateComponent
  },
  {
    path: 'edit/:id', component: ClientUpdateComponent
  },

  {
    path: 'client/:id', component: ClientUpdateComponent
  },

  {path: '**', redirectTo: 'list', pathMatch: 'full'}

];
export class AppRouting {

}
