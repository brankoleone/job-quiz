'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [quizConfig, setQuizConfig] = useState({
    title: 'Technical Interview Quiz',
    focus: 'Frontend Development',
    numQuestions: 20,
    numChoices: 4,
  });

  const startQuiz = async () => {
    try {
      const response = await fetch('/api/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          numQuestions: quizConfig.numQuestions,
          numChoices: quizConfig.numChoices,
        }),
      });

      if (response.ok) {
        router.push('/quiz');
      } else {
        console.error('Failed to fetch questions');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold">{quizConfig.title}</h1>
        <p className="text-lg mt-2">Focus: {quizConfig.focus}</p>
      </motion.div>

      <div className="mt-6 space-y-4">
        <label className="block">
          Number of Questions:{' '}
          <input
            type="number"
            value={quizConfig.numQuestions}
            onChange={(e) =>
              setQuizConfig({ ...quizConfig, numQuestions: parseInt(e.target.value) })
            }
            className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
          />
        </label>
        <label className="block">
          Answer Choices per Question:{' '}
          <input
            type="number"
            value={quizConfig.numChoices}
            onChange={(e) => setQuizConfig({ ...quizConfig, numChoices: parseInt(e.target.value) })}
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
