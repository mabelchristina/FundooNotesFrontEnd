import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
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
    private noteservice: NotesService,private formBuilder: FormBuilder
  ) {
    console.log('data in dialog', data);
  }

  ngOnInit(): void {
    this.noteForm=this.formBuilder.group({
      title : this.data.title,
      description : this.data.description
    })
 
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  updateNotes(reqData: any) {
    reqData = {
      noteId:this.data.id,
      title: this.data.title,
      description: this.data.description,
    };
    this.noteservice.UpdateNote(reqData).subscribe((response: any) => {
      console.log(response);
      this.dialogRef.close();
    });

    
  }
}
