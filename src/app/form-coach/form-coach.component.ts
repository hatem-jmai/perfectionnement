import { Component, OnInit } from '@angular/core';

import { AuthService } from '../service/auth.service';
import { coach } from '../service/entity/coach';
//import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
import {EmailValidator, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {pipe} from 'rxjs';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MatDatepickerInputEvent, MatDialog, MatDialogRef,MatFormFieldModule} from '@angular/material';
import {error} from 'util';
type Type = 'text' | 'password' ;

/*
// la fonction de password et confirm password
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}*/


@Component({
  selector: 'app-form-coach',
  templateUrl: './form-coach.component.html',
  styleUrls: ['./form-coach.component.css']
})
export class FormCoachComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  select = new FormControl(null, [Validators.required]);
  /*user: coach = new coach();
  registerForm: FormGroup;
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';

  }
  constructor(private formBuilder: FormBuilder, private userService: AuthService, public dialog: MatDialog) {
  }
  add() {
   this.userService.createcoach(this.user).subscribe(data => console.log(data), error1 => console.log(error1));
     
     this.registerForm.reset();
 }*/
  //@Input() panParent: boolean;
  //@Output() closeAll = new EventEmitter<boolean>();

  user: coach ;
  registerForm: FormGroup;
  maxDate = new Date(2003, 0, 0);
  minDate = new Date(1920, 0, 1);
  private convertDate: string;

  public reactiveForm: FormGroup = new FormGroup({
    recaptchaReactive: new FormControl(null, Validators.required)
  });
  gender;
  



  constructor(private formBuilder: FormBuilder, private userService: AuthService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.user = new coach();
    this.registerForm = this.formBuilder.group({
      name: [this.user.nom, [Validators.required]],
      lastname: [this.user.prenom, [Validators.required]],
      email: [this.user.adresse_mail, [Validators.required, Validators.email]],
      dateBirth: [this.user.date_naiss, [Validators.required]],
      gender: [this.user.genre, [Validators.required]],

      adress: [this.user.gouvernorat, [Validators.required]],
      phoneNumber: [this.user.tel, [Validators.required]],
      password: [this.user.password, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(100)
      ]]});
  }
  get f() { return this.registerForm.controls; }


  date(e) {
    this.convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.registerForm.get('birthDate').setValue(this.convertDate, {
      onlyself: true
    });
  }

  add() {
    console.log(this.user);
    this.userService.createcoach(this.user).subscribe(data => console.log(data), error1 => console.log(error1));
    
    this.registerForm.reset();
}
}

  



