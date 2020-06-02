import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConfirmationDialogComponent} from './confirmation-dialog/confirmation-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {ConfirmationDialogService} from './confirmation-dialog.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BsDatepickerConfig, BsDatepickerModule} from 'ngx-bootstrap/datepicker';




@NgModule({
  declarations: [ConfirmationDialogComponent],
  imports: [
    MatDialogModule,
    BsDatepickerModule.forRoot()

  ],
  exports: [ConfirmationDialogComponent,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BsDatepickerModule,
    HttpClientModule],
  providers: [ConfirmationDialogService, { provide: BsDatepickerConfig, useFactory: getDatepickerConfig }],
  entryComponents: [ConfirmationDialogComponent]

})


export class SharedModule { }


export function getDatepickerConfig(): BsDatepickerConfig {
  return Object.assign(new BsDatepickerConfig(), {
    dateInputFormat: 'YYYY-MM-DD',
    containerClass: 'theme-dark-blue',
    isAnimated: true,

  });
}


