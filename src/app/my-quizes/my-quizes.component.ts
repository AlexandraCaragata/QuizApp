import { Component, OnInit } from '@angular/core';
import { Quiz } from '../entities/quiz';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { QuizApiService } from '../quiz-api.service';
import { QuizActions } from '../quiz.actions';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-my-quizes',
  templateUrl: './my-quizes.component.html',
  styleUrls: ['./my-quizes.component.css']
})
export class MyQuizesComponent implements OnInit {
  quizes: Quiz[];
  isLoading: boolean;
  show: true;

  constructor(private ngRedux: NgRedux<AppState>, private quizActions: QuizActions) { }


  ngOnInit() {
    this.ngRedux.select(state => state.quizes).subscribe( result =>{
      this.quizes = result.quizes;
      this.isLoading = result.isLoading;
      
    });
    this.quizActions.getUserQuizes(); 
    console.log(this.quizes)
  }

  onQuizClicked(quiz: Quiz){
    console.log(quiz);
  }
}