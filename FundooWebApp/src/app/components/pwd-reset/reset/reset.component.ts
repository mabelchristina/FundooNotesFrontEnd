import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../../../services/user/user.service';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  hide=true;
  token:any;
  resetPasswordForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router,private userService: UserService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.token = this.activatedRoute.snapshot.params['token'];
    console.log(this.token);
    this.resetPasswordForm = this.formBuilder.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        
    });
  }
  onSubmit() {
    if (this.resetPasswordForm.valid){
      console.log(this.resetPasswordForm.value)
      let reqData={
        newPassword:this.resetPasswordForm.value.password,
        
      }
      this.userService.resetPassword(reqData, this.token).subscribe((response: any)=>{
        console.log(response);
      }
      )
    }
  }


}
