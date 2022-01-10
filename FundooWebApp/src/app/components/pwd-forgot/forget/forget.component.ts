import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../../../services/user/user.service';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {

  forgotPasswordForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router,private userService: UserService) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
  });
  }
  onSubmit() {
    if (this.forgotPasswordForm.valid){
      console.log(this.forgotPasswordForm.value)
      let reqData={
        email:this.forgotPasswordForm.value.email,
        service:this.forgotPasswordForm.value.service
      }
      this.userService.forgotPassword(reqData).subscribe((response: any)=>{
        console.log(response);
      }
      )
    }
    else {
      console.log(this.forgotPasswordForm.value)
    }
  }


}
