'use client';

import { Button } from '@/components/ui/button';
import { useQuizStore } from '@/store/quizStore';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const { store, setStore } = useQuizStore();

  const startQuiz = async () => {
    router.push('/quiz');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold">{store.title}</h1>
        <p className="text-lg mt-2">Focus: {store.focus}</p>
      </motion.div>

      <div className="mt-6 space-y-4">
        <label className="block">
          Number of Questions:{' '}
          <input
            type="number"
            value={store.numQuestions}
            onChange={(e) => setStore({ ...store, numQuestions: parseInt(e.target.value) })}
            className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
          />
        </label>
        <label className="block">
          Answer Choices per Question:{' '}
          <input
            type="number"
            value={store.numChoices}
            onChange={(e) => setStore({ ...store, numChoices: parseInt(e.target.value) })}
            className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
          />
        </label>
      </div>

      <Button className="mt-6" onClick={startQuiz}>
        Start Quiz
      </Button>
    </div>
  );
}
