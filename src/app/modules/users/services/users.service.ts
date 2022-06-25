import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CoreHttpService } from 'src/shared/services/http-core.service';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends CoreHttpService {

  override API_URL = `${environment.apiUrl}users`;
  constructor(@Inject(HttpClient) http: HttpClient) {
    super(http);
  }

  getUsersMethod() : Observable<UserModel[]> {
    const newPath = `${this.API_URL}`;
    const request = this.getMethod(newPath)
    return request;
  }

}
