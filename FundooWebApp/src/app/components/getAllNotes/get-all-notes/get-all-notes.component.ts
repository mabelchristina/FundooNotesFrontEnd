import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/note/notes.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss'],
})
export class GetAllNotesComponent implements OnInit {
  notesArray: any = [];

  constructor(private noteservice: NotesService) {}

  ngOnInit(): void {
    this.getAllNotes();
  }
  getAllNotes() {
    console.log('going to notes');
    this.noteservice.getAllNotes().subscribe((result: any) => {
      console.log(result);
      this.notesArray = result.data.data;
      this.notesArray.reverse();
      this.notesArray = this.notesArray.filter((element: any) => {
        return element.isDeleted == false && element.isArchived == false;
      })
      console.log('the note list is', this.notesArray);
    });
  }
  messageReceived(e: any) {
    console.log('msg from create note', e);
    this.getAllNotes();
  }
}
