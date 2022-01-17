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
  // createNote(reqPayload: object){
  //   this.token=localStorage.getItem('token')
  //   let httpOptions={
  //     headers: new HttpHeaders ({
  //       'Content-Type':'application/json',
  //       'Authorization':this.token

  //       })
  //   }
  //   console.log(reqPayload)
  //   return this.httpService.PostService(this.baseUrl+'notes/addNotes',reqPayload,true,httpOptions)
  // }
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
  GetallNotes(url: any) {
    this.token = localStorage.getItem('token');
    let options = {
      headers: new HttpHeaders({
        'Authorization': this.token,
        'Content-Type': 'application/json'
      })
    }
    console.log("given data is", url);
    console.log(options);
    return this.httpService.GetService(this.baseUrl+'notes/getNotesList',true,options);
  }
  createNote(token: any, data: any) {
    console.log(token, data);
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    }
    console.log(options);
    return this.httpService.PostService(this.baseUrl+'/notes/addNotes', data, true, options);

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
    return this.httpService.GetService(this.baseUrl+'notes/getTrashNotesList',true,httpOptions)
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
    return this.httpService.PostService(this.baseUrl+'notes/trashNotes', data,true,httpOptions)

  }
  trashnote(data:any){
    this.token=localStorage.getItem('token')
    let httpOptions = {
      headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': this.token
      })
      
      }
      return this.httpService.PostService(this.baseUrl+'/notes/trashNotes', data, true, httpOptions)
  }

  archiveNote(data: any){
    this.token=localStorage.getItem('token')
      let httpOptions = {
        headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
        })
      }
    return this.httpService.PostService(this.baseUrl+'notes/archiveNotes', data,true, httpOptions)
  }
  deleteForeverNotes(data: any){
    this.token=localStorage.getItem('token')
      let httpOptions = {
        headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
        })
      }
    return this.httpService.PostService(this.baseUrl+'notes/deleteForeverNotes', data,true, httpOptions)

  }
  changeNoteColor(data: any){
    this.token=localStorage.getItem('token')
    let httpOptions = {
      headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': this.token
      })
    }
    return this.httpService.PostService(this.baseUrl+'notes/changesColorNotes', data,true, httpOptions)
  }
  getallarchiveNotes() {
    this.token=localStorage.getItem('token')
    let httpOptions = {
      headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': this.token
      })
    }
    return this.httpService.GetService(this.baseUrl+'notes/getArchiveNotesList',true, httpOptions)
  }
}
