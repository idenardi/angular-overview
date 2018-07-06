import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    const userid = this.route.snapshot.queryParamMap.get('userId');
    this.postService.getAll(userid).subscribe(todosPosts => this.posts = todosPosts);
  }

}
