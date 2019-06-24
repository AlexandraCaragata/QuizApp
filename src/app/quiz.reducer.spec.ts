import { QuizActions } from './quiz.actions';
import { quizReducer } from './quiz.reducer';
import { Quiz } from './entities/quiz';
import { QuizState } from './store';
var deepFreeze = require('deep-freeze');

describe('quiz reducer tests', () => {

  it('should create new ', () => {
    // Arrange - Act - Assert

    // Arrange
    let startState = {quizes: []} as QuizState;
    deepFreeze(startState);
    let quiz = { title: 'Test quiz', questions: [] } as Quiz;
    let actionObj = { type: QuizActions.CREATE_QUIZ, payload: quiz };
    
    // Act
    let newStateObj = quizReducer(startState, actionObj);
    
    // Assert (expect)
    expect(newStateObj.quizes.length).toBe(1);
    expect(newStateObj.quizes[0].title).toBe('Test quiz');
  });
});