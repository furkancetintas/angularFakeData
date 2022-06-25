import { TodoModel } from './../models/todo.model';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CoreHttpService } from 'src/shared/services/http-core.service';

@Injectable({
  providedIn: 'root'
})
export class TodosService extends CoreHttpService {

  override API_URL = `${environment.apiUrl}todos`;
  constructor(@Inject(HttpClient) http: HttpClient) {
    super(http);
  }

  getTodosMethod() : Observable<TodoModel[]> {
    const newPath = `${this.API_URL}`;
    const request = this.getMethod(newPath);
    return request;
  }
}
