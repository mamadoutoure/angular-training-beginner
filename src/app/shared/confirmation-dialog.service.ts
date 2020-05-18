import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmationDialogComponent} from './confirmation-dialog/confirmation-dialog.component';

@Injectable()
export class ConfirmationDialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(msg: string) {
    return this.dialog.open(ConfirmationDialogComponent, {
      width: '390px',
      // panelClass: 'confirm-dialog-container',
      disableClose: true,
      position: {top: '10px'},
      data: {
         message: msg
      }
    });
  }

}
