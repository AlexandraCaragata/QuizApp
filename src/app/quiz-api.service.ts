import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Quiz } from './entities/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizApiService {

  constructor(private store:AngularFirestore) { }

  getAllQuizes(): Observable<any>{
    return this.store.collection('quizes').snapshotChanges();
  }

  createQuiz(quiz: Quiz) {
    return this.store.collection('quizes').add(quiz);
  }

  
}
