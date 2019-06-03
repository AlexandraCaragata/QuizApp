import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from './store';
import { Quiz, Rating } from './entities/quiz';


@Injectable({ providedIn: 'root'})
export class QuizActions {
constructor (
  private ngRedux: NgRedux<AppState>) {} 
  
  static CREATE_QUIZ: string = 'CREATE_QUIZ'; 
  static UPDATE_QUIZ: string = 'UPDATE_QUIZ'; 
  static DELETE_QUIZ: string = 'DELETE_QUIZ'; 


  createQuiz(quiz: Quiz) :void {
    this.ngRedux.dispatch({
      type: QuizActions.CREATE_QUIZ,
      payload: quiz
    });
}

deleteQuiz(quiz: Quiz): void{
    this.ngRedux.dispatch({
        type: QuizActions.DELETE_QUIZ,
        payload:quiz});
}
  
}


