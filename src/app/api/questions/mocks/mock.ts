export const mockedResponse = [
  {
    question: 'How can you improve the performance of a large React application?',
    answers: [
      'Use uncontrolled components to avoid unnecessary re-renders.',
      'Always call setState inside componentDidMount to ensure updates.',
      'Implement shouldComponentUpdate or React.memo to prevent unnecessary renders of class components and functional components respectively.',
      'Increase the size of your JavaScript bundle to ensure all functionality is pre-loaded.',
    ],
    correctAnswer: 2,
    explanation:
      'To improve performance in a large React application, one effective strategy is to implement shouldComponentUpdate or use React.memo. shouldComponentUpdate can be used with class components to manually control whether updates should be performed based on changes in state or props. React.memo is the functional component equivalent, providing a way to memoize component outputs for the same set of props, preventing unnecessary renders. This approach helps decrease render time and increases performance, which is crucial in managing the performance of large applications.',
    tags: ['react', 'performance', 'frontend'],
  },
  {
    question: 'What is the primary purpose of a virtual DOM in JavaScript frameworks like React?',
    answers: [
      'To directly update the real DOM for every change in the application state.',
      'To provide an interface for server-side rendering.',
      'To enhance the performance by minimizing direct operations on the real DOM.',
      'To facilitate database operations within the client-side applications.',
    ],
    correctAnswer: 2,
    explanation:
      'The virtual DOM is a lightweight in-memory representation of the real DOM. Its primary purpose is to improve performance by reducing the number of direct manipulations and reflows of the real DOM. Instead of updating the real DOM for every small change, the virtual DOM is updated first, and only the differences are applied to the real DOM, optimizing rendering efficiency.',
    tags: ['react', 'virtual-dom', 'performance'],
  },
  {
    question:
      'In a modern JavaScript application using React, what is the primary purpose of the useEffect hook?',
    answers: [
      'To directly manipulate the DOM',
      'To fetch data and run side-effects in a component',
      'To declare component state variables',
      'To configure Webpack settings',
    ],
    correctAnswer: 1,
    explanation:
      'The useEffect hook in React is used to perform side effects in functional components. It can be used for tasks like fetching data, updating the DOM, or setting timers. It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components.',
    tags: ['react', 'hooks', 'javascript', 'frontend'],
  },
  {
    question: "In the context of React, what is the main purpose of using the 'useMemo' hook?",
    answers: [
      'To memoize expensive function calls to optimize the performance of functional components.',
      'To manage side effects in function components without class-based lifecycle methods.',
      'To handle asynchronous data fetching in React components more efficiently.',
      'To cache API request results that can be reused throughout the application.',
    ],
    correctAnswer: 0,
    explanation:
      "The 'useMemo' hook in React is used to memoize the result of an expensive calculation, helping to optimize performance by preventing unnecessary re-calculations on every render. It recomputes the memoized value only when one of its dependencies has changed, ensuring that the cached result is accurate based on current state or props.",
    tags: ['react', 'performance'],
  },
  {
    question: "What is the purpose of the 'use strict' directive in JavaScript?",
    answers: [
      'It enables modern JS features to be used without a transpiler.',
      'It instructs the browser to use strict mode, catching common coding bloopers.',
      'It allows the use of TypeScript features in regular JavaScript.',
      'It optimizes the performance of the JavaScript code by default.',
    ],
    correctAnswer: 1,
    explanation:
      "'use strict' is a directive introduced in ECMAScript 5 that enables strict mode. This mode helps in catching common coding mistakes and 'unsafe' actions such as assigning to undeclared variables. By enforcing stricter parsing and error handling, it helps in writing more secure and reliable code.",
    tags: ['javascript', 'frontend', 'programming'],
  },
];
