import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { coach } from '../service/entity/coach';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: coach ;
  result:object;
  constructor(private userService: AuthService,private router: Router) { }

  ngOnInit() {
    this.user =new coach();
    
  }
  login(){
   this.result= this.userService.loginCoach(this.user).subscribe(data => console.log(data), error1 => console.log(error1));  
    this.router.navigate(['/acceuil']);   
  }
  
}
