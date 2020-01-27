import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  password:string;
  username:string;
  login:string;
  constructor(private service:LoginService) { }

  ngOnInit() {
                function show() {
                  var p = document.getElementById('pwd');
                  p.setAttribute('type', 'text');
                }
                
                function hide() {
                  var p = document.getElementById('pwd');
                  p.setAttribute('type', 'password');
                }
                
                var pwShown = 0;
                
                document.getElementById("eye").addEventListener("click", function () {
                  if (pwShown == 0) {
                      pwShown = 1;
                      show();
                  } else {
                      pwShown = 0;
                      hide();
                  }
                }, false);  
            }
connection(username,password):string{
 this.login=this.service.connection(username,password);
}

}
