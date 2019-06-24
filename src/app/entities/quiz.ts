import { User } from '../entities/user';

export class Quiz {
  _id: string;
  username: string;
  title: string;
  created?: Date;
  questions: Question[]; 
  ratings?: Rating[];
  userId: string;

}
export class Question {
  title: string;
  options: Option[];
}
export class Option {
  answer: string;
  correct: boolean;
}
export class Rating {
  grade: number;
  user: User;
  timestamp?: Date;
  title?: string;
  message?: string;
}