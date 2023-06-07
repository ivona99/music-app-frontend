import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { LoginResponseI } from 'src/app/model/login-response.interface';
import { UserI } from 'src/app/model/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private snackbar: MatSnackBar, private router: Router) { }

  login(user: UserI): Observable<LoginResponseI>{
    return this.http.post<LoginResponseI>(`http://localhost:3000/users/login`,user).pipe(
      tap((res:LoginResponseI) => localStorage.setItem('nestjs_music_app', res.access_token)),
      tap(() => this.snackbar.open('Login Successful', 'Close', {
        duration: 2000, horizontalPosition:'right', verticalPosition:'top'
      })),
      catchError(e => {
        this.snackbar.open(`User could not be logged, due to: ${e.error.message}`, 'Close', {
          duration: 5000, horizontalPosition: 'right', verticalPosition:'top'
        })
        return throwError(e);
      })
    );
  }

  logout() {  
    localStorage.removeItem('nestjs_music_app');  
    this.router.navigate(['../../home']);
}

}
