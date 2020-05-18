import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConfirmationDialogComponent} from './confirmation-dialog/confirmation-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {ConfirmationDialogService} from './confirmation-dialog.service';




@NgModule({
  declarations: [ConfirmationDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [ConfirmationDialogComponent],
  providers: [ConfirmationDialogService],
  entryComponents: [ConfirmationDialogComponent]

})
export class SharedModule { }
