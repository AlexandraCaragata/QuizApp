import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Quiz } from './entities/quiz';
import { User } from './entities/user';

@Injectable({
  providedIn: 'root'
})
export class QuizApiService {

  constructor(private store:AngularFirestore) { }

  getAllQuizes(): Observable<any>{
    return this.store.collection('quizes').snapshotChanges();
  }

  createQuiz(quiz: Quiz, username: string, uid: string) {
    quiz.created = new Date();
    quiz.username = username;
    quiz.userId = uid;
    return this.store.collection('quizes').add(quiz);
  }
  
}
