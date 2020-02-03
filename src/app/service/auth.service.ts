import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { coach } from './entity/coach';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:coach;
  private baseURL = 'http://localhost:3000/coachs';
  
  constructor(private http:HttpClient) { }
  
  createcoach(coach: object): Observable<object> {
    return this.http.post(`http://localhost:3000/addcoachs`, coach);
  }

  loginCoach(): Observable<any>{
    
    return this.http.get(`${this.baseURL}/login/${this.user.nom}/${this.user.password}`);
    
  }
}
