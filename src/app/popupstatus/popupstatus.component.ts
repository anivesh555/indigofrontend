import {Component, OnInit, Inject} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-popupstatus',
  templateUrl: './popupstatus.component.html',
  styleUrls: ['./popupstatus.component.css']
})
export class PopupstatusComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public locationdata: any
  ) { }
    public message:any
  ngOnInit(): void {
    this.message = this.locationdata

  }
  dismiss(){
    this.dialog.closeAll()
    
  }

}
