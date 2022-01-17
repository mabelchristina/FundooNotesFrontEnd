import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { NotesService } from 'src/app/services/note/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  notesArray: any;
  token=localStorage . getItem('token' )


  constructor(private noteservice:NotesService,public data:DataService) { }
  

  ngOnInit(): void {
    this.getAllTrash();
  }


  getAllTrash() {
    console.log('getting to all trash');
    this.noteservice.delete().subscribe((result: any) => {
      console.log(result);
      this.notesArray = result.data.data;
      this.notesArray.reverse();

      console.log('the note list is', this.notesArray);
    });
  }
  permanentDelete() {
    // console.log(this.noteId);
    //alert(this.token_Id)
    let data = {
      isDeleted: true,
      noteIdList: [this.notesArray]
    }
    this.noteservice.deleteForeverNotes(data).subscribe((data: any) => {
      console.log(" Deleted Successfully", data);
      // window.location.reload();
    });
    this.data.redirectTo("/dashboard/trash")
  }
}
