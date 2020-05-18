import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,
              public matDialogRef: MatDialogRef<ConfirmationDialogComponent>) { }

  ngOnInit() {
  }

  closeDialog() {
     this.matDialogRef.close(false);
  }

}
