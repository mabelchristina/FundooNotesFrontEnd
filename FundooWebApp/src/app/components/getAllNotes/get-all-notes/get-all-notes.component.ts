import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/note/notes.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss'],
})
export class GetAllNotesComponent implements OnInit {
  noteList: any;

  constructor(private noteservice: NotesService) {}

  ngOnInit(): void {
    this.getAllNotes();
  }
  getAllNotes() {
    console.log("going to notes")
    this.noteservice.getAllNotes().subscribe((result: any) => {
      console.log(result);
      this.noteList = result.data.data;
      this.noteList.reverse()
      console.log('the note list is', this.noteList);
    });
  }
  messageReceived(e:any)
  {
console.log("msg from create note",e)
this.getAllNotes();
  }
}
