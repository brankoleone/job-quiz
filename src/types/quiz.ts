export type Question = {
  question: string;
  answers: string[];
  correctAnswer: number | number[];
  explanation: string;
  tags: string[];
};

export interface QuizResponse {
  questions: Question[];
}
