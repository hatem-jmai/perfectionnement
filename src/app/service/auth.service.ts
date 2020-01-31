import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  
  createcoach(coach: object): Observable<object> {
    return this.http.post(`http://localhost:3000/addcoachs`, coach);
  }
}
