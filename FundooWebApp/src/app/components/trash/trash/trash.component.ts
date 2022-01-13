import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/note/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  notes: any


  constructor(private noteservice:NotesService) { }
  

  ngOnInit(): void {
    this.getAllTrash();
  }


  getAllTrash() {
    console.log('getting to all trash');
    this.noteservice.getAllNotes().subscribe((result: any) => {
      console.log(result);
      this.notes = result.data.data;
      this.notes.reverse();

      console.log('the note list is', this.notes);
    });
  }
}
