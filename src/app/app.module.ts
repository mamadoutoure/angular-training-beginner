import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {APP_ROUTES} from './app-routing';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ClientCreateComponent } from './client/client-create/client-create.component';
import { ClientUpdateComponent } from './client/client-update/client-update.component';
import { ClientDetailComponent } from './client/client-detail/client-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BsDatepickerConfig, BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { CommandeListComponent } from './commande/commande-list/commande-list.component';
import { CommandeCreateComponent } from './commande/commande-create/commande-create.component';
import { CommandeUpdateComponent } from './commande/commande-update/commande-update.component';
import { CommandeDetailComponent } from './commande/commande-detail/commande-detail.component';
import { ClientCommandsComponent } from './client/client-commands/client-commands.component';
import {SharedModule} from './shared/shared.module';
registerLocaleData(localeFr, 'fr');


@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientCreateComponent,
    ClientUpdateComponent,
    ClientDetailComponent,
    CommandeListComponent,
    CommandeCreateComponent,
    CommandeUpdateComponent,
    CommandeDetailComponent,
    ClientCommandsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES),
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: BsDatepickerConfig, useFactory: getDatepickerConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getDatepickerConfig(): BsDatepickerConfig {
  return Object.assign(new BsDatepickerConfig(), {
    dateInputFormat: 'YYYY-MM-DD',
    containerClass: 'theme-dark-blue',
    isAnimated: true,

  });
}
