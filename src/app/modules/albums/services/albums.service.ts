import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CoreHttpService } from 'src/shared/services/http-core.service';
import { AlbumModel } from '../models/album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService extends CoreHttpService{

  override API_URL = `${environment.apiUrl}albums`;

  constructor(@Inject(HttpClient) http:HttpClient) { 
    super(http);
  }

  getAlbumsMethod() : Observable<AlbumModel[]>{
    const newPath = `${this.API_URL}`;
    const request = this.getMethod(newPath);
    return request;
  }
}
