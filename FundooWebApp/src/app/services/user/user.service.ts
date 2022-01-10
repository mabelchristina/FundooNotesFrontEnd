import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import {HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }
  baseUrl='http://fundoonotes.incubation.bridgelabz.com/api/'
  UserSignup(reqPayload: object){
    let httpOptions={
      headers: new HttpHeaders ({
        'Content-Type':'application/json'
        })
    }
    console.log(reqPayload)
    return this.httpService.PostService(this.baseUrl+'user/userSignUp',reqPayload,false,httpOptions)
  }
  UserLogin(reqPayload: object){
    let httpOptions={
      headers: new HttpHeaders ({
        'Content-Type':'application/json'
        })
    }
    console.log(reqPayload)
    return this.httpService.PostService(this.baseUrl+'user/login',reqPayload,false,httpOptions)
  }
  forgotPassword(reqPayload: object){
    let httpOptions={
      headers: new HttpHeaders ({
        'Content-Type':'application/json'
        })
    }
    console.log(reqPayload)
    return this.httpService.PostService(this.baseUrl+'user/reset',reqPayload,false,httpOptions)
  }
  resetPassword(reqPayload: object, token:any){
    let httpOptions={
      headers: new HttpHeaders ({
        'Content-Type':'application/json',
        'Authorization':token,
        })
    }
    console.log(reqPayload)
    return this.httpService.PostService(this.baseUrl+'user/reset-password',reqPayload,true,httpOptions)
  }


  // login(loginData) {
  //   return this.httpService.post('user/login', loginData);
  // }

  // requestForgot(forgotData) {
  //   return this.httpService.post('user/reset', forgotData);
  // }

  // resetPassword(resetData, token) {
  //   return this.httpService.post(
  //     `user/reset-password?access_token=${token}`,
  //     resetData
  //   );
  // }
}
