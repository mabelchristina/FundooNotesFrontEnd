import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../../../services/user/user.service';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  hide = true;
  signupForm!: FormGroup;
  submitted = false;
 

  constructor( private formBuilder: FormBuilder, private router: Router,private userService: UserService) { }
    

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      service: "advance"
    });
  }
  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value)
      let reqData = {
        firstName: this.signupForm.value.firstName,
        lastName: this.signupForm.value.lastName,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
        service: this.signupForm.value.service
      }
      this.userService.UserSignup(reqData).subscribe((response: any) => {
        console.log(response);
      }
      )
    }
  }

  }
  