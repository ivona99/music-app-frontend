import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../_helpers/custom-validators';
import { UserService } from '../../services/user-service/user.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  inputs: HTMLCollectionOf<HTMLElement> = document.getElementsByTagName('input') as HTMLCollectionOf<HTMLElement>;
  inputsArr?:any;


  ngOnInit(): void {
    this.inputsArr = Array.from(this.inputs);
    this.inputsArr.forEach((item: any) => {
      item.addEventListener('focus', () => { 
        if(item.value.length >= 0){
          item.previousElementSibling?.classList.add('active'); 
        }
      });
      item.addEventListener('focusout', () => {
        if(item.value.length <= 0){
          item.previousElementSibling?.classList.remove('active');
        }
      });
    });
  }

  form: FormGroup = new FormGroup ({
    user_name: new FormControl(null, [Validators.required]),
    user_email: new FormControl(null, [Validators.required,Validators.email]),
    user_password: new FormControl(null, [Validators.required]),
    passwordConfirm: new FormControl(null, [Validators.required])
  },
  {validators: CustomValidators.passwordsMatching});

  constructor(private userService: UserService, private router: Router) { }

  register(){
    if(this.form.valid){
      this.userService.create({
        user_name:this.user_name.value,
        user_email: this.user_email.value,
        user_password: this.user_password.value
      }).pipe(
      tap(() => this.router.navigate(['public/login']))
      ).subscribe();
    }
  }

  get user_name(): FormControl {
    return this.form.get('user_name') as FormControl;
  }

  get user_email(): FormControl {
    return this.form.get('user_email') as FormControl;
  }

  get user_password(): FormControl {
    return this.form.get('user_password') as FormControl;
  }

  get passwordConfirm(): FormControl {
    return this.form.get('passwordConfirm') as FormControl;
  }



}
