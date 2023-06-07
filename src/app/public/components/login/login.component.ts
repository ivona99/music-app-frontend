import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-service/auth.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
    user_email: new FormControl(null, [Validators.required, Validators.email]),
    user_password: new FormControl(null, [Validators.required])
  });

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    if(this.form.valid) {
      this.authService.login({
        user_email:this.user_email.value,
        user_password:this.user_password.value
      }).pipe(
        tap(() => this.router.navigate(['../../private/dashboard']))
      ).subscribe()
      
      
    }
  }

  get user_email(): FormControl {
    return this.form.get('user_email') as FormControl;
  }

  get user_password(): FormControl {
    return this.form.get('user_password') as FormControl;
  }



}
