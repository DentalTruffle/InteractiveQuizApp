// pages/quiz/[quizId].js

import { useRouter } from 'next/router';

// Date statice pentru quiz-uri
const quizzes = {
  1: {
    title: "Cultura Generală - Quiz 1",
    category: "Cultura Generală",
    questions: [
      {
        question: "Care este capitala Franței?",
        options: ["Paris", "Berlin", "Madrid", "Roma"],
        answer: "Paris",
      },
      {
        question: "În ce an a început Primul Război Mondial?",
        options: ["1914", "1939", "1945", "1901"],
        answer: "1914",
      },
      {
        question: "Cine a scris 'Romeo și Julieta'?",
        options: ["Shakespeare", "Dante", "Homer", "Cervantes"],
        answer: "Shakespeare",
      },
    ],
  },
  2: {
    title: "Cultura Generală - Quiz 2",
    category: "Cultura Generală",
    questions: [
      {
        question: "Care este cel mai lung fluviu din lume?",
        options: ["Nil", "Amazon", "Yangtze", "Mississippi"],
        answer: "Amazon",
      },
      {
        question: "Ce țară are cea mai mare populație?",
        options: ["China", "India", "SUA", "Indonezia"],
        answer: "China",
      },
      {
        question: "Când a fost fondată Uniunea Europeană?",
        options: ["1993", "1986", "2001", "1999"],
        answer: "1993",
      },
    ],
  },
};

export default function QuizPage() {
  const router = useRouter();
  const { quizId } = router.query;

  // Verifică dacă quizId-ul este valid
  const quiz = quizzes[quizId];

  if (!quiz) {
    return <h1>Quiz-ul nu a fost găsit!</h1>;
  }

  return (
    <div>
      <h1>{quiz.title}</h1>
      <h2>Categorie: {quiz.category}</h2>
      
      <ol>
        {quiz.questions.map((q, index) => (
          <li key={index}>
            <p>{q.question}</p>
            <ul>
              {q.options.map((option, idx) => (
                <li key={idx}>{option}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
