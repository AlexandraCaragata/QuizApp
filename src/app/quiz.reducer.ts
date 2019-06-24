import { QuizActions } from './quiz.actions';
import { QuizState } from './store';
import { tassign } from 'tassign';

const INITIAL_STATE: QuizState = {quizes:[], isLoading:false}

export function quizReducer(state: QuizState = INITIAL_STATE, action:any) {

 switch (action.type) {

  case QuizActions.GET_QUIZZES_LOADING:
    return tassign(state, {isLoading:true});

  case QuizActions.GET_QUIZZES_SUCCESS:
    return tassign(state,{isLoading:false, quizes: action.payload});

  case QuizActions.GET_QUIZZES_FAILED:
    return tassign(state,{isLoading:false});
    
  case QuizActions.CREATE_QUIZ:
    return tassign(state, { quizes: [...state.quizes, action.payload] });

   case QuizActions.DELETE_QUIZ:
   return tassign(state, {quizes: state.quizes.
    filter(quiz => quiz._id !== action.payload)});

   default:
   return state;
}

}
