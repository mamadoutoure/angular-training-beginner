import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CommandeCreateComponent} from './commande-create/commande-create.component';
import {CommandeUpdateComponent} from './commande-update/commande-update.component';
import {CommandeDetailComponent} from './commande-detail/commande-detail.component';
import {CommandeListComponent} from './commande-list/commande-list.component';



const commandRoutes: Routes = [
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
];

@NgModule({
  declarations: [],
  imports: [
    //CommonModule,
    RouterModule.forChild(commandRoutes)
  ],
  exports: [RouterModule]
})
export class CommandeRoutingModule { }
