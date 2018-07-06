import { Component, OnInit, Input } from '@angular/core';
import { Post } from './../../models/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

   @Input('post') post: Post;
   @Input('bg-color') backgroundColor: string;

  constructor(private route: Router ) { }

  verAutor() {
    this.route.navigate(['user', this.post.userId ]);
  }
}
