import { Component, OnInit } from '@angular/core';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-display-quiz',
  templateUrl: './display-quiz.component.html',
  styleUrls: ['./display-quiz.component.css']
})
export class DisplayQuizComponent implements OnInit {

  quiz: any;
  questions : any;
  quizform: FormGroup;
  option: string;

  constructor(private store: AngularFirestore, private route:ActivatedRoute, private fb: FormBuilder) { 
    
  }

  ngOnInit() {
      
      this.store.collection('quizes').doc(this.route.snapshot.params.id).get().subscribe( response =>{
        if(response.exists){
          this.quiz= response.data();
          this.questions = response.data().questions;
          console.log(this.questions[0].options[0].answer);
          console.log(this.quiz.questions[0].title);
          console.log(this.quiz.questions[0].options);
        }
        
      });

    
  }

}
