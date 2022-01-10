import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/services/note/notes.service';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss'],
})
export class CreatenoteComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<any>();
  formBuilder: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private noteService: NotesService
  ) {}
  noteForm!: FormGroup;

  @Output() createNoteAutoRefresh = new EventEmitter<any>();

  ngOnInit(): void {
    this.noteForm = new FormGroup({
      Title: new FormControl(null),
      Body: new FormControl(null),
    });
  }
  createNote() {
    let reqData = {
      title: this.noteForm.value.Title,
      description: this.noteForm.value.Body,
    };

    this.noteService.createNote(reqData).subscribe((res: any) => {
      console.log(res);
      this.createNoteAutoRefresh.emit(res);
    });
  }
 
}
