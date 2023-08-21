// surveySlice.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  questions: [],
  responses: {},
};

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      state.questions.push(action.payload);
    },
    setResponse: (state, action) => {
      const { questionId, response } = action.payload;
      state.responses[questionId] = response;
    },
  },
});

export const { addQuestion, setResponse } = surveySlice.actions;
export default surveySlice.reducer;
