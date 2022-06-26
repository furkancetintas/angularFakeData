import { Component, OnInit } from '@angular/core';
import { PostModel } from './models/post.model';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postsTitle = "Posts"

  posts:PostModel[] = [];
  
  constructor(
    private postsService:PostsService
  ) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(){
    this.postsService.getPostsMethod().subscribe((response)=>{
      console.log(response);
      this.posts = response;
    })
  }

}
