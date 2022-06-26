import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CoreHttpService } from 'src/shared/services/http-core.service';
import { PhotoModel } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotosService extends CoreHttpService{


  override API_URL = `${environment.apiUrl}photos`;
  constructor(@Inject(HttpClient) http:HttpClient) { 
    super(http);
  }

  getPhotosMethod() : Observable<PhotoModel[]>{
    const newPath = `${this.API_URL}`;
    const request = this.getMethod(newPath);
    return request;
  }
}
