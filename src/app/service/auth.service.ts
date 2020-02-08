import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {coach} from './entity/coach';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
private baseURL = 'http://localhost:3000/coachs';

  constructor(private http:HttpClient) { }

  creatclient(client: object):Observable<object>{
    return this.http.post('http://localhost:3000/addclient',client)
  }
  createcoach(coach: object): Observable<object> {
    return this.http.post(`http://localhost:3000/addcoachs`, coach);
  }

  loginCoach(coach: object): Observable<object>{
    
    return this.http.post(`http://localhost:3000/logincoachs/login`,coach);
  }
  

} 