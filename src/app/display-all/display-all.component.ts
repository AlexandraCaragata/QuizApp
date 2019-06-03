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
  quiz: any;

  constructor(private fb: FormBuilder, private ngRedux: NgRedux<AppState>,
    private router: Router, private quizActions: QuizActions, private afs: AngularFirestore,
    private api: QuizApiService, private store: AngularFirestore, private route: ActivatedRoute) { }


  ngOnInit() {

    this.api.getAllQuizes().subscribe(data => {
      this.quizes = data.map(e => {
        return {
          _id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Quiz[];

      })
    })
  }


}
