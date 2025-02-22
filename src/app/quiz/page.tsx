'use client';

import { Button } from '@/components/ui/button';
import { useQuizStore } from '@/store/quizStore';
import { Question, QuizResponse } from '@/types/quiz';
import { motion } from 'framer-motion';
// import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function QuizPage() {
  // const router = useRouter();
  const { config } = useQuizStore();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('/api/questions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            numQuestions: config.numQuestions,
            numChoices: config.numChoices,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to fetch questions');
        }

        const data: QuizResponse = await response.json();
        setQuestions(data.questions);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong');
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuestions();
  }, [config.numQuestions, config.numChoices]);

  const handleAnswer = (index: number, choice: string) => {
    console.log('Choice:', index, choice);
    setAnswers({ ...answers, [currentQuestion]: choice });
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      console.log('Answers:', answers);
      // router.push('/results');
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <p>Loading questions...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <p className="text-red-400">{error}</p>
        <Button onClick={() => window.location.reload()} className="mt-4">
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-500"
      >
        <h1 className="text-2xl font-bold mb-10">Question {currentQuestion + 1}</h1>
        <p className="text-lg mt-2 min-h-24">{questions[currentQuestion]?.question}</p>
      </motion.div>
      <div className="mt-6 space-y-4 w-auto min-w-500 max-w-500">
        {questions[currentQuestion]?.answers.map((choice, index) => (
          <label
            key={`${currentQuestion}-${choice}`}
            className={`block w-full px-6 py-4 bg-gray-800 hover:bg-gray-900 border ${answers[currentQuestion] === choice ? 'border-yellow-400' : 'border-gray-600'}  rounded-md cursor-pointer`}
          >
            <input
              type="radio"
              name={`question-${currentQuestion}`}
              value={choice}
              checked={answers[currentQuestion] === choice}
              onChange={() => handleAnswer(index, choice)}
              className="mr-2 hidden"
            />
            {choice}
          </label>
        ))}
      </div>
      <div>
        <Button className={`mt-6 mr-4 ${!currentQuestion ? 'hidden' : ''}`} onClick={prevQuestion}>
          Prev
        </Button>
        <Button className="mt-6" onClick={nextQuestion} disabled={!answers[currentQuestion]}>
          {currentQuestion < questions.length - 1 ? 'Next' : 'Submit'}
        </Button>
      </div>
    </div>
  );
}
