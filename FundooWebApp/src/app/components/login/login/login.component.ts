import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { UserService } from '../../../services/user/user.service';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      let reqData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };
      this.userService.UserLogin(reqData).subscribe((response: any) => {
        localStorage.setItem('token', response.id);
        console.log(response);
          this.router.navigateByUrl('/dashboard/note');
      });
    }
  }

}
