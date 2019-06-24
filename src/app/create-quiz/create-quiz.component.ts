import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Quiz } from '../entities/quiz';
import { Router } from '@angular/router';
import { QuizActions } from '../quiz.actions';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
  createQuiz: FormGroup;
  quizes: Quiz[];
  constructor(private fb: FormBuilder,private af: AngularFireAuth,
    private router: Router, private quizActions: QuizActions, private afs: AngularFirestore) {

     }

  saveQuiz() {  
    let quiz = this.createQuiz.value as Quiz;
    this.afs.collection('users').doc(this.af.auth.currentUser.uid).get().subscribe(
      doc =>{
        this.quizActions.createQuiz(quiz, doc.data().username, this.af.auth.currentUser.uid);
        this.router.navigate(['home/display-all']);
      }
    )
    this.afs.collection('users').doc(this.af.auth.currentUser.uid).update(this.quizes)
  
    
    
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
    const options = (<FormArray>questions.controls[questionIndex]).controls['options'] as FormArray;
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
