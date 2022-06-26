import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CoreHttpService } from 'src/shared/services/http-core.service';
import { CommentModel } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService extends CoreHttpService{

  override API_URL = `${environment.apiUrl}comments`;

  constructor(@Inject(HttpClient) http:HttpClient) { 
    super(http);
  }

  getCommentsMethod() : Observable<CommentModel[]>{
    const newPath = `${this.API_URL}`;
    const request = this.getMethod(newPath);
    return request;
  }
}
