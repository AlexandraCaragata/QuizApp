import { Pipe, PipeTransform } from '@angular/core';
import { Quiz } from './entities/quiz';

@Pipe({
  name: 'userPipe'
})
export class UserPipePipe implements PipeTransform {

  transform(quizes: Quiz[], search: any): any {
    if(!quizes) return[];
    if(!search) return quizes;
  
    return quizes.filter( quiz =>{
      return  quiz.username.includes(search)});

  }

}
