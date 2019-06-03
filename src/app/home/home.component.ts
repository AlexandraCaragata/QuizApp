import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { User } from '../entities/user';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  constructor(private auth: AngularFireAuth, private router: Router, private authService: AuthService) { }
  currentUser = this.auth.auth.currentUser;

  

  ngOnInit() {
    console.log(this.currentUser);
  }

  logout(){
    this.authService.logout();
  
  }

}
