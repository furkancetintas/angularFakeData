import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { CoreHttpService } from 'src/shared/services/http-core.service';
import { Observable } from 'rxjs';
import { PostModel } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService extends CoreHttpService {

  override API_URL = `${environment.apiUrl}posts`;
  constructor(
    @Inject(HttpClient) http:HttpClient) { 
      super(http);
    }
  

  getPostsMethod() : Observable<PostModel[]> {
    const newPath = `${this.API_URL}`;
    const request = this.getMethod(newPath);
    return request;

  }
}
