import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BodyhomeComponent } from './bodyhome/bodyhome.component';
import { FormCoachComponent } from './form-coach/form-coach.component';
import { FormClientComponent } from './form-client/form-client.component';


const routes: Routes = [
  {path:'acceuil',component:BodyhomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'formCoach',component:FormCoachComponent},
  {path:'formClient',component:FormClientComponent},

  {path:'',redirectTo:'acceuil',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
