import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormBuilder,FormGroup,Validators, FormControl } from '@angular/forms';
import{Router} from'@angular/router';
import {User} from'../entities/user';
import {AuthService} from '../auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import {takeUntil, take } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  
  user: User;
  loginForm: FormGroup;
  private destroyed = new Subject();
  

  constructor(private auth: AuthService, private router: Router, private formBuilder: FormBuilder, 
    private af: AngularFireAuth ) {
      
     }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email:['', [Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  get formControls(){
    return this.loginForm.controls;
  }

  onSubmit(){

    if(this.loginForm.invalid){
      return;
    }

    this.user = this.loginForm.value;
    this.auth.login(this.user.email, this.user.password).pipe(
      takeUntil(this.destroyed),
      take(1)
    ).subscribe(result =>{
      this.router.navigateByUrl('home/display-all')
      console.log(this.af.auth.currentUser)
    }, reason =>{
      console.error(reason)
    })
  
  }

}
