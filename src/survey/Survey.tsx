// Survey.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { addQuestion } from '../redux/surveySlice';
import Question from './Question';
import { SurveyQuestions } from './SurveyQuestions'

const Survey: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const questions = useSelector((state: RootState) => state.survey.questions);

  const handleAddQuestion = () => {
    dispatch(addQuestion({ id: `question-${questions.length + 1}`, text: 'New Question', type: 'text' }));
  };

  return (
    <div>
      <h1>Survey</h1>
      <button onClick={handleAddQuestion}>Add Question</button>

      {SurveyQuestions.map((question) => (
        <Question key={question.id} {...question} />
      ))}

      {questions.map((question) => (
        <Question key={question.id} {...question} />
      ))}
    </div>
  );
};

export default Survey;
