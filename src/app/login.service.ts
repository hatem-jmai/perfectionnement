import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: null
})
export class LoginService {
result:any;
errorMessage: any;
  constructor(private http: HttpClient) { }

  connection(log:string,pass:string) {
    
    let URL = "localhost:3000/coachs/login/"+log+"?password="+pass;
    return this.http.get(URL).subscribe(
      data => this.result = data,
                error =>  this.errorMessage = <any>error); 
                console.log(this.result);
}
}
