import { ChatCompletionCreateParamsNonStreaming } from 'openai/resources/index.mjs';
import { models } from './models';

import { DevLevel, devLevelsListing } from './devLevels';

const topics = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Angular',
  'Web Performance',
  'Web Accessibility',
  'Web Security',
  'Testing',
  'Frontend Best Practices',
];

const numberOfQuestions = 20;
const possibleAnswers = 4;

const systemBehavior = `You are a Frontend Development Expert and an experienced technical interviewer responsible for assessing candidates for frontend engineering roles. Your job is to generate high-quality, relevant, and challenging multiple-choice questions (MCQs) with ${possibleAnswers} answer options. The questions should evaluate a candidate's knowledge of ${topics.join(', ').replace(/, ([^,]*)$/, ' and $1')}.

The total number of questions you need to generate is ${numberOfQuestions}.
Each question should be tailored to one of the following frontend developer levels:
${devLevelsListing}

Each question should have:
1. A concise but clear question statement.
2. A number of ${possibleAnswers} answer choices labeled A, B, C, and so on.
3. A single correct answer for most questions.
4. For 10% of the questions, multiple correct answers (2 or more) should be possible. It should be explicitly mentioned in the question.
5. A short explanation of why the correct answer(s) is right and why the other options are incorrect.
6. At least two relevant technical tags.

Ensure that the difficulty and topic of the questions are appropriate for the specified developer level. Keep the language professional and technical.`;

const returnFormat = `Make sure to return an array with a total of ${numberOfQuestions} items, where each question has ${possibleAnswers} possible answers, in the following JSON format: 
    { 
      "question": "your question here", 
      "answers": ["answer1", "answer2", "answer3", ...],
      "correctAnswer": 0, // If multiple correct answers exist, use an array: [1, 3]
      "explanation": "explanation paragraph here", 
      "tags": ["javascript", "frontend"] 
    }
      
    Make sure only one answer is correct, the "correctAnswer" index matches the correct answer in the answers array. Whenever multiple correct answers exist, the "correctAnswer" value will be an array containing the indexes of the correct answers and include at least two relevant technical tags.`;

const generateUserMessageFor = (level: DevLevel) => {
  return `Generate a front-end job interview questions list of ${numberOfQuestions} items for a ${level} with ${possibleAnswers} possible answers.`;
};

const FrontEnd = {
  JUNIOR: generateUserMessageFor(DevLevel.JuniorFEDev),
  MID: generateUserMessageFor(DevLevel.MidFEDev),
  SENIOR: generateUserMessageFor(DevLevel.SeniorFEDev),
  LEAD: generateUserMessageFor(DevLevel.LeadFEDev),
  ARCHITECT: generateUserMessageFor(DevLevel.FEArchitect),
};

export const questionRequest: ChatCompletionCreateParamsNonStreaming = {
  model: models.GPT_4o,
  store: true,
  messages: [
    { role: 'system', content: systemBehavior },
    { role: 'user', content: FrontEnd.JUNIOR },
    { role: 'assistant', content: returnFormat },
  ],
  response_format: { type: 'json_object' },
};
