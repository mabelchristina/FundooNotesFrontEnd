import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DataService } from 'src/app/services/data/data.service';
import { NotesService } from 'src/app/services/note/notes.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  title: any;
  description: any;
  status = false;
  noteForm!:FormGroup

  constructor(
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private noteservice: NotesService,private dataService: DataService
  ) {
    console.log('data in dialog', data);
    this.title = data.title
    this.description = data.description
  }

  ngOnInit(): void {
   
 
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  updateNote() {

    let request = {
      noteId: this.data.id,
      title: this.title,
      description: this.description
    }

    this.noteservice.UpdateNote(request).subscribe((result) => {
      console.log(result);
      this.dialogRef.close();
      // window.location.reload()
    })
    this.dataService.redirectTo("/dashboard/note")
  }
}
