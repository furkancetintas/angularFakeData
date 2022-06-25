import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CoreHttpService } from 'src/shared/services/http-core.service';

@Injectable({
  providedIn: 'root'
})
export class PhotosService extends CoreHttpService{


  override API_URL = `${environment.apiUrl}photos`;
  constructor(@Inject(HttpClient) http:HttpClient) { 
    super(http);
  }

  getPhotosMethod(){
    const newPath = `${this.API_URL}`;
    const request = this.getMethod(newPath);
    return request;
  }
}
