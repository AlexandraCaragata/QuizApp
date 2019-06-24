import { Component, OnInit } from '@angular/core';
import { Quiz } from '../entities/quiz';
import { AppState } from '../store';
import { NgRedux } from '@angular-redux/store';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { QuizActions } from '../quiz.actions';
import { QuizApiService } from '../quiz-api.service';

@Component({
  selector: 'app-display-all',
  templateUrl: './display-all.component.html',
  styleUrls: ['./display-all.component.css']
})
export class DisplayAllComponent implements OnInit {

  quizes: Quiz[];
  isLoading: boolean;

  constructor( private ngRedux: NgRedux<AppState>, private quizActions: QuizActions) { }


  ngOnInit() {

    this.ngRedux.select(state => state.quizes).subscribe( result =>{
      this.quizes = result.quizes;
      this.isLoading = result.isLoading;
      
    });
    this.quizActions.getAllQuizes(); 
  
  }
}
