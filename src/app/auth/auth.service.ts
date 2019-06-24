import { Injectable } from '@angular/core';
import { User } from '../entities/user';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAction } from '@angular/fire/database';
import { Observable, Subject, observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn : boolean = false;
  user: User;

  constructor(private af: AngularFireAuth, private store: AngularFirestore){
    
  }

  register(email: string, password: string, user: User) {
    this.af
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        this.store.collection('users').doc(value.user.uid).set(user);
        console.log('Success!', value);
        this.isLoggedIn = true;
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });    


  }

  login(email: string, password: string): Subject<User> {
    const observable = new Subject<User>()
    this.af
      .auth
      .signInWithEmailAndPassword(email, password).then( (value : firebase.auth.UserCredential)  =>{
          observable.next(this.user = new User(this.af.auth.currentUser));
          this.isLoggedIn = true;
      });
      return observable;
      
  }

  logout() {
    this.af
      .auth
      .signOut();
  }

}

