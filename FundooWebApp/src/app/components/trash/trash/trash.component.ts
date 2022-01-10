import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/note/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  notes: any = ['data'];
  data:any

  constructor(private noteservice:NotesService) { }
  

  ngOnInit(): void {
    this.getTrash();
  }
  getTrash() {
    this.noteservice.delete().subscribe(res => {
      
      console.log("Success",res )
      this.notes = res;
    })
  }
}
