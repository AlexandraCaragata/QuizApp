import { Pipe, PipeTransform } from '@angular/core';
import { Quiz } from './entities/quiz';
import { fadeInItems } from '@angular/material';

@Pipe({
  name: 'quizPipe'
})
export class QuizPipe implements PipeTransform {

  transform(quizes: Quiz[], searchText: string): any {
    if(!quizes) return[];
    if(!searchText) return quizes;

    return quizes.filter( quiz => quiz.title.indexOf(searchText) !== -1);

  
  }

}
