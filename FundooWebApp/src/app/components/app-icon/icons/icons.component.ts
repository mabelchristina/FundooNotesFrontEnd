import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/services/note/notes.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {


  constructor(private noteService: NotesService) { }

  noteId: any;

  
  ngOnInit(): void {
  }

  deleteNote() {
    console.log(this.noteId);
    let data = {
      "id": [this.noteId.id],
    }
    console.log(data)
    this.noteService.deleteNotes(data).subscribe(res => {
      console.log("Success", res)

    },
      error => {
        console.log("Error", error)
      })
  }

}
