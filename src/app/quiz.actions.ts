import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from './store';
import { Quiz, Rating } from './entities/quiz';
import { QuizApiService } from './quiz-api.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({ providedIn: 'root' })
export class QuizActions {
  constructor(
    private ngRedux: NgRedux<AppState>, private api: QuizApiService, private store: AngularFirestore, private auth: AngularFireAuth) { }

  static CREATE_QUIZ: string = 'CREATE_QUIZ';
  static UPDATE_QUIZ: string = 'UPDATE_QUIZ';
  static DELETE_QUIZ: string = 'DELETE_QUIZ';

  static GET_QUIZZES_LOADING: string = 'GET_QUIZZES_LOADING';
  static GET_QUIZZES_SUCCESS: string = 'GET_QUIZZES_SUCCESS';
  static GET_QUIZZES_FAILED: string = 'GET_QUIZZES_FAILED';

  static CREATE_RATING: string = 'CREATE_RATING';

  getAllQuizes(): void {
    this.ngRedux.dispatch({ type: QuizActions.GET_QUIZZES_LOADING }); // start loading proccess
    this.api.getAllQuizes().subscribe(data => {
      this.ngRedux.dispatch({
        type: QuizActions.GET_QUIZZES_SUCCESS,
        payload: data.map(e => {
          return {
            _id: e.payload.doc.id,
            ...e.payload.doc.data()
          } as Quiz[];
        })
      })
    })
  }

  getUserQuizes(): void {
    this.ngRedux.dispatch({ type: QuizActions.GET_QUIZZES_LOADING });
    this.api.getAllQuizes().subscribe(data => {
      this.ngRedux.dispatch({
        type: QuizActions.GET_QUIZZES_SUCCESS,
        payload: data.map(e => {
          return {
            _id: e.payload.doc.id,
            ...e.payload.doc.data()
          } as Quiz[];
        }).filter(quiz => 
            quiz.userId == this.auth.auth.currentUser.uid
           
        )
      })
    })
  }

  

  createQuiz(quiz: Quiz, username: string, uid: string): void {
    this.api.createQuiz(quiz, username, uid).then(docRef => {
      console.log("Document written with ID: ", docRef.id);
      quiz._id = docRef.id
    }).catch(error => {
      console.error("Error adding document: ", error);
    })

    this.ngRedux.dispatch({
      type: QuizActions.CREATE_QUIZ,
      payload: quiz
    });
  }

  deleteQuiz(quiz: Quiz): void {
    this.ngRedux.dispatch({
      type: QuizActions.DELETE_QUIZ,
      payload: quiz
    });
  }

}


