import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quiz } from '../entities/quiz';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  @Input() quizInput: Quiz;
  @Output() quizClicked: EventEmitter<Quiz> = new EventEmitter<Quiz>(); 

  quiz:any;
  show: true;

  constructor(private store:AngularFirestore, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    
  }
  
  
  onQuizClick(quiz:Quiz) {
    this.quizClicked.emit(quiz);
  }

}
