import { Observable, tap, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserI } from 'src/app/model/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private snackbar: MatSnackBar) {}

  create(user: UserI): Observable<UserI> {
    return this.http.post<UserI>(`http://localhost:3000/users`, user).pipe(
      tap((createdUser: UserI) => this.snackbar.open(`User ${createdUser.user_name} created successfully`, 'Close', {
        duration:2000, horizontalPosition: 'right', verticalPosition:'top'
      })),
      catchError(e => {
        this.snackbar.open(`User could not be created, due to: ${e.error.message}`, 'Close', {
          duration: 5000, horizontalPosition: 'right', verticalPosition:'top'
        })
        return throwError(e);
      })
    )
  }
}
