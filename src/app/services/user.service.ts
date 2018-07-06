import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { catchError, map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: Http ) { }

  getUser(userId: string) {
    return this.http.get(this.url + '/' + userId)
      .pipe(
        map( response => response.json()),
        catchError((res: HttpErrorResponse ) => {
          if (res.status === 400) {
              console.log('Erro 400');
          } else {
            return throwError('Erro inesperado');
          }
        }
      )
    );
  }
}
