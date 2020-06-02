import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ClientListComponent} from './client-list/client-list.component';
import {ClientCreateComponent} from './client-create/client-create.component';
import {ClientUpdateComponent} from './client-update/client-update.component';
import {ClientDetailComponent} from './client-detail/client-detail.component';
import {ClientCommandsComponent} from './client-commands/client-commands.component';


const clientRouting: Routes = [
  {
    path: '', component: ClientListComponent
  },
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
];

@NgModule({
  declarations: [],
  imports: [
    //CommonModule,
    RouterModule.forChild(clientRouting)
  ],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
