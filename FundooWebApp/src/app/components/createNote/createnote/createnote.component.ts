import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
import { NotesService } from 'src/app/services/note/notes.service';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss'],
})
export class CreatenoteComponent implements OnInit {

  fullEdit: boolean = false;
  pin: boolean = false;
  title = '';
  description = '';
  token: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private noteService: NotesService,private data:DataService) {}

  // noteForm!: FormGroup;

  @Output() createNoteAutoRefresh = new EventEmitter<any>();

  ngOnInit(): void {
   
  }
 

  addNote() {
    let data = {
      title: this.title,
      description: this.description,
    }
    console.log(data)
    this.token = localStorage.getItem('token');
    console.log(" add note data ", data, this.token);
    if (this.title && this.description) {
      this.noteService.createNote(this.token, data).subscribe((response: any) => {
        console.log(response);
        let message = "note created successfull";
        console.log(message);

        this.title = " ";
        this.description = "";

        // window.location.reload()
        this.data.redirectTo("/dashboard/note")


      }, error => {
        console.log("error in register", error);
      })
    } else {
      this.fullEdit = false;
    }
  }


  togglePin() {
    this.pin = !this.pin;
  }
  displayFull() {
    this.fullEdit = true;
  }
 
}
