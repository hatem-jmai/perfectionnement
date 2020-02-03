import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { coach } from '../service/entity/coach';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:coach;
  log:string;
  password:string;
  constructor(private userService: AuthService) { }

  ngOnInit() {
  }
  login(){
    
    this.userService.loginCoach().subscribe(data => console.log(data), 
    error1 => console.log(error1));
  }
}
