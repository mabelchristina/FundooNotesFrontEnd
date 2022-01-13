import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/note/notes.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  notes:any = [];
  public isUnArchive = true;

  constructor(private noteservice:NotesService) { }

  ngOnInit(): void {
    this.getAllArchive();
  }
 

  getAllArchive() {
    console.log('getting  all archive');
    this.noteservice.getallarchiveNotes().subscribe((result: any) => {
      console.log(result);
      this.notes = result.data.data;
      this.notes.reverse();

      console.log('the note list is', this.notes);
    });
  }

}
