import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import {HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  baseUrl='http://fundoonotes.incubation.bridgelabz.com/api/'
  token:any
  constructor(private httpService: HttpService  ) { }
  createNote(reqPayload: object){
    this.token=localStorage.getItem('token')
    let httpOptions={
      headers: new HttpHeaders ({
        'Content-Type':'application/json',
        'Authorization':this.token

        })
    }
    console.log(reqPayload)
    return this.httpService.PostService(this.baseUrl+'notes/addNotes',reqPayload,true,httpOptions)
  }
  getAllNotes(){
    this.token=localStorage.getItem('token')
    let httpOptions={
      headers: new HttpHeaders ({
        'Content-Type':'application/json',
        'Authorization':this.token

        })
      };
      console.log("getting note ")
      return this.httpService.GetService(this.baseUrl+'notes/getNotesList',true,httpOptions)

  }
  UpdateNote(reqPayload: object){
    this.token=localStorage.getItem('token')
    let httpOptions={
      headers: new HttpHeaders ({
        'Content-Type':'application/json',
        'Authorization':this.token

        })
    }
    console.log(reqPayload)
    return this.httpService.PostService(this.baseUrl+'notes/updateNotes',reqPayload,true,httpOptions)
  }
  delete(){
    this.token=localStorage.getItem('token')
    let httpOptions={
      headers: new HttpHeaders ({
        'Content-Type':'application/json',
        'Authorization':this.token

        })
      };
      console.log("deleting note ")
    return this.httpService.GetService('notes/getTrashNotesList',true,httpOptions)
  }
  deleteNotes(data: any){
    this.token=localStorage.getItem('token')
    let httpOptions={
      headers: new HttpHeaders ({
        'Content-Type':'application/json',
        'Authorization':this.token

        })
      };
      console.log("deleting a note ")
    return this.httpService.PostService('notes/trashNotes', data,true,httpOptions)

  }
}
