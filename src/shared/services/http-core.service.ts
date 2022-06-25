import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoreHttpService {
  _errorMessage$ = new BehaviorSubject<string>('');

  get errorMessage$() {
    return this._errorMessage$.asObservable();
  }

  header = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  protected http: HttpClient;
  API_URL = `${environment.apiUrl}/endpoint`;
  constructor(http: HttpClient) {
    this.http = http;
  }

  //? Observable Methods
  getMethod(url: string): Observable<any>{
    const newPath = `${url}`
    const result = this.http.get<any>(newPath, {headers: this.header});
    return result;
  }

  postMethod(url: string, model: any):Observable<any>{
    const newPath = `${this.API_URL}/${url}`
    const result = this.http.post<any>(newPath, model, {headers: this.header});
    return result
  }

  putMethod(url: string, model: any):Observable<any>{    
    const newPath = `${this.API_URL}/${url}`
    const result = this.http.put<any>(newPath, model, {headers: this.header});
    return result
  }

  deleteMethod(url: string):Observable<any>{    
    const newPath = `${this.API_URL}/${url}`
    const result = this.http.delete<any>(newPath, {headers: this.header});
    return result
  }

  //?Promise Method
  getMethodPromise(url:string):Promise<any>{    
    const newPath = `${this.API_URL}/${url}`;
    const result = this.http.get<any>(newPath, {headers: this.header}).toPromise();
    return result
  }

  postMethodPromise(url: string, model: any):Promise<any>{
    const newPath = `${this.API_URL}/${url}`
    const result = this.http.post<any>(newPath, model, {headers: this.header}).toPromise();
    return result
  }

  putMethodPromise(url: string, model: any):Promise<any>{
    const newPath = `${this.API_URL}/${url}`
    const result = this.http.put<any>(newPath, model, {headers: this.header}).toPromise();
    return result
  }

  deleteMethodPromise(url: string):Promise<any>{
    const newPath = `${this.API_URL}/${url}`
    const result = this.http.delete<any>(newPath, {headers: this.header}).toPromise();
    return result
  }

}
