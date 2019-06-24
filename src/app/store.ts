import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { quizReducer } from './quiz.reducer';
import { Quiz } from './entities/quiz';

export class QuizState {
  quizes: Quiz[];
  isLoading: boolean;
  isLoggedIn?: boolean;
  
}

export class AppState {
  quizes?: QuizState;
}
export const rootReducer = combineReducers<AppState>({
  quizes: quizReducer,
  router: routerReducer
} as any);
