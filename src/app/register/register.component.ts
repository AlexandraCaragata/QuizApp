import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import { User } from '../entities/user';
import { AngularFirestore} from '@angular/fire/firestore';
import { FirebaseAuth } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;
  registerForm: FormGroup;

  constructor(private auth: AuthService, private router: Router, 
    private formBuilder: FormBuilder, private store: AngularFirestore) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name:['',Validators.required],
      username:['',[Validators.required, Validators.minLength(4)]],
      email:['',[ Validators.required, Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    });
  }
  get formControls(){
    return this.registerForm.controls;
  }
  
  onSubmit(){

    this.user = this.registerForm.value;

    this.auth.register(this.user.email, this.user.password)

    this.store.collection('users').add(this.user);
    if(this.registerForm.invalid){
      return;
    }
    
    this.router.navigateByUrl('home');
  }
  }
