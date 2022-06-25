import { Component, OnInit } from '@angular/core';
import { CommentModel } from './models/comment.model';
import { CommentsService } from './services/comments.service';

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  commentsTitle = "Comments";

  faEnvelope = faEnvelope;

  comments:CommentModel[] = [];

  constructor(
    private commentsService:CommentsService
  ) { }

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments(){
    this.commentsService.getCommentsMethod().subscribe((response) =>{
      console.log(response);
      this.comments = response;
    })
  }

}
