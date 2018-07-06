import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Post } from './../models/post';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient ) { }

  getAll(userid?) {
    let query = '';
    if (userid) {
      query = '?userId=' + userid;
    }
    return this.http.get<Post[]>(this.url + query)
    .pipe(
      catchError((res: HttpErrorResponse ) => {
        if (res.status === 400) {
            console.log('Erro 400');
        } else {
          return throwError(res.status);
        }
      }));
  }

  addPost(post: Post) {
    this.http.post(this.url, JSON.stringify(post));
  }

  updatePost(post: Post) {
    this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(idPost: number) {
    this.http.delete(this.url + '/' + idPost);
  }

}
