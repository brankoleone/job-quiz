'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const questions = [
    { text: 'What is React?', choices: ['Library', 'Framework', 'Language', 'Tool'] },
    {
      text: 'What is JSX?',
      choices: ['Syntax Extension', 'Programming Language', 'Library', 'Framework'],
    },
  ];

  const handleAnswer = (choice: string) => {
    setAnswers({ ...answers, [currentQuestion]: choice });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      router.push('/results');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-2xl font-bold">Question {currentQuestion + 1}</h1>
        <p className="text-lg mt-2">{questions[currentQuestion].text}</p>
      </motion.div>
      <div className="mt-6 space-y-4">
        {questions[currentQuestion].choices.map((choice) => (
          <button
            key={`${currentQuestion}-${choice}`}
            onClick={() => handleAnswer(choice)}
            className="block w-full px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-md"
          >
            {choice}
          </button>
        ))}
      </div>
      <Button className="mt-6" onClick={nextQuestion}>
        {currentQuestion < questions.length - 1 ? 'Next' : 'Submit'}
      </Button>
    </div>
  );
}
