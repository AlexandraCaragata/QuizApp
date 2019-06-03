import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Quiz } from '../entities/quiz';
import { Router } from '@angular/router';
import { QuizActions } from '../quiz.actions';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
  createQuiz: FormGroup;
  private quizCollection: AngularFirestoreCollection<Quiz>;
  quizes: Observable<Quiz[]>

  constructor(private fb: FormBuilder,
    private router: Router, private quizActions: QuizActions, private afs: AngularFirestore) {
      this.quizCollection =afs.collection<Quiz>('quizes');
      this.quizes = this.quizCollection.valueChanges();
     }

  saveQuiz() {
    console.log(this.createQuiz.value);
    //make this async
    
    let quiz = this.createQuiz.value as Quiz;
    this.quizActions.createQuiz(quiz);
    this.quizCollection.add(quiz);
    quiz._id= this.quizCollection.ref.doc().id;
    console.log(quiz._id);
    this.router.navigate(['home/display-all']);
    
  }

  createNewQuestion() {
    const question = this.fb.group({
      title: ['', Validators.required],
      options: this.fb.array([])
    });

    const questions = this.createQuiz.controls.questions as FormArray;
    const options = question.controls.options as FormArray;
    options.push(this.createNewOptionGroup());
    options.push(this.createNewOptionGroup());
    // console.log(options);
    questions.push(question);
  }
  createNewOption(questionIndex: number){
    const option = this.createNewOptionGroup();
    const questions = this.createQuiz.controls.questions as FormArray;
    // console.log(questions);
    const options = (<FormArray>questions.controls[questionIndex]).controls['options'] as FormArray;
    // console.log(options);
    options.push(option);
  }
  private createNewOptionGroup(): FormGroup {
    return this.fb.group({
      answer: ['', Validators.required],
      correct: [false, Validators.required]
    });
  }


  ngOnInit() {
    this.createQuiz = this.fb.group({
      title: [''],
      questions: this.fb.array([]),
  
    })
  }
}
