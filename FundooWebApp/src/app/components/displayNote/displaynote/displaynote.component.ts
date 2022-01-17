import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UpdateComponent } from '../../update-Note/update/update.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NotesService } from 'src/app/services/note/notes.service';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
  @Input() allNotes: any = [];
  tokenId = localStorage.getItem("token");

  colorData: string = '';


  // @Input() NotesArray:any
  // @Input() isTrash: any;
  // @Input() isUnArchive: any;
  constructor(public note: NotesService,public dialog:MatDialog) { }

  ngOnInit(): void {
    //console.log("notelist in display",this.NotesArray)
  }
  receiveToUpdate = ($colorData: string) => {
    this.colorData = $colorData;
    console.log("display " + this.colorData)
  }
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '250px',
      data: note,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
