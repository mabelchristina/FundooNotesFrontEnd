import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UpdateComponent } from '../../update-Note/update/update.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {


  @Input() NotesArray:any
  @Input() isTrash: any;
  @Input() isUnArchive: any;
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
    console.log("notelist in display",this.NotesArray)
  }
  openDialog(noteObject:any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '250px',
      data: noteObject,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
