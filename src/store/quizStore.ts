import { create } from 'zustand';

type QuizStoreType = {
  title: string;
  focus: string;
  numQuestions: number;
  numChoices: number;
};

interface QuizStore {
  store: QuizStoreType;
  setStore: (store: QuizStoreType) => void;
}

export const useQuizStore = create<QuizStore>((set) => ({
  store: {
    title: 'Technical Interview Quiz',
    focus: 'Frontend Development',
    numQuestions: 20,
    numChoices: 4,
  },
  setStore: (store) => set({ store }),
}));
