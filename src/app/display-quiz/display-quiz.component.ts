import { Component, OnInit } from '@angular/core';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-display-quiz',
  templateUrl: './display-quiz.component.html',
  styleUrls: ['./display-quiz.component.css']
})
export class DisplayQuizComponent implements OnInit {

  quiz: any;

  constructor(private store: AngularFirestore, private route:ActivatedRoute) { }

  ngOnInit() {
      
      this.store.collection('quizes').doc(this.route.snapshot.params.id).get().subscribe( response =>{
        if(response.exists){
          this.quiz= response.data();
          console.log(this.quiz);
        }
        
      });

    
  }

}
