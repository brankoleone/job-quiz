import { create } from 'zustand';

type QuizConfig = {
  title: string;
  focus: string;
  numQuestions: number;
  numChoices: number;
};

interface QuizStore {
  config: QuizConfig;
  setConfig: (config: QuizConfig) => void;
}

export const useQuizStore = create<QuizStore>((set) => ({
  config: {
    title: 'Technical Interview Quiz',
    focus: 'Frontend Development',
    numQuestions: 20,
    numChoices: 4,
  },
  setConfig: (config) => set({ config }),
}));
