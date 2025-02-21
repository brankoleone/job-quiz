import { ChatCompletionCreateParamsNonStreaming } from 'openai/resources/index.mjs';
import { models } from './models';

const returnFormat =
  'Return it in this JSON format: { "question": "your question here", "answers": ["answer1", "answer2", "answer3", "answer4", ...], "correctAnswer": 0, "explanation": "explanation paragraph here", "tags": ["javascript", "frontend"] }. Make sure only one answer is correct, the correctAnswer index matches the correct answer in the answers array, and include at least two relevant technical tags.';

const juniorFeQuestionRequest = `Generate a front-end development interview question for a junior engineer with 4 possible answers. ${returnFormat}`;

const seniorFeQuestionRequest = `Generate a front-end development interview question for a senior engineer with 4 possible answers. ${returnFormat}`;

const consultantFeQuestionRequest = `Generate a front-end development interview question for a consultant engineer with 4 possible answers. ${returnFormat}`;

const FrontEnd = {
  JUNIOR: juniorFeQuestionRequest,
  SENIOR: seniorFeQuestionRequest,
  CONSULTANT: consultantFeQuestionRequest,
};

export const questionRequest: ChatCompletionCreateParamsNonStreaming = {
  model: models.GPT_4o,
  store: true,
  messages: [{ role: 'user', content: FrontEnd.JUNIOR }],
  response_format: { type: 'json_object' },
};
