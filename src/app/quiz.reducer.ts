import { QuizActions } from './quiz.actions';
import { QuizState } from './store';
import { tassign } from 'tassign';

const INITIAL_STATE: QuizState = {quizzes:[]}

export function quizReducer(state: QuizState = INITIAL_STATE, action:any) {

 switch (action.type) {
   case QuizActions.CREATE_QUIZ:

   return tassign(state, { quizzes: [...state.quizzes, action.payload] });

   case QuizActions.DELETE_QUIZ:
   return tassign(state, {quizzes: state.quizzes.
    filter(quiz => quiz._id !== action.payload)});

   default:
   return state;
}

}
