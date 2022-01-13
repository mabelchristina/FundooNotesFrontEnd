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
  colors: any;
  hide:any
    open:any=false;

  isOpen = true;
  public show: boolean = true;
  public buttonName: any = "Title";

  constructor(
    private http: HttpClient,
    private router: Router,
    private noteService: NotesService) {}
  title=new FormControl('',[Validators.required])
description=new FormControl('',[Validators.required])
  noteForm!: FormGroup;

  @Output() createNoteAutoRefresh = new EventEmitter<any>();

  ngOnInit(): void {
    this.noteForm = new FormGroup({
      Title: new FormControl(null),
      Body: new FormControl(null),
    });
  }
  changeDisplay(){
    this.open= !this.open
  }
  setClicked(){
    this.hide=true
  }

  onClick() {
    this.show = !this.show;
    // CHANGE THE NAME OF THE field.
    if (this.show)
      this.buttonName = "Take a note";
    else
      this.buttonName = "Title"; }
      
  createNote() {
    let reqData = {
      title: this.noteForm.value.Title,
      description: this.noteForm.value.Body,
    };

    this.noteService.createNote(reqData).subscribe((res: any) => {
      console.log(" creating a note",res);
      this.createNoteAutoRefresh.emit(res);
    });
  }
  createColor(color: any) {
    this.colors = color;
    console.log(this.colors)
  }
 
}
