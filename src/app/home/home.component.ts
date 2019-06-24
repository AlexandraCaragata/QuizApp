import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { User } from '../entities/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string;
  

  constructor(private auth: AngularFireAuth, private router: Router, private authService: AuthService, private store: AngularFirestore) { }
  currentUser = this.auth.auth.currentUser;

  

  ngOnInit() {
    this.store.collection('users').doc(this.currentUser.uid).get().subscribe(
      document =>{
       console.log(document.data().username);
       this.username = document.data().username;
      }
    )

    console.log(this.currentUser);
  }

  logout(){
    this.authService.logout();
  
  }

}
