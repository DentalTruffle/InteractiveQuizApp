// pages/index.js
import Link from 'next/link';

// Date statice pentru categoriile și quiz-urile disponibile
const quizzes = [
  {
    id: 1,
    title: "Cultura Generală - Quiz 1",
    category: "Cultura Generală",
  },
  {
    id: 2,
    title: "Cultura Generală - Quiz 2",
    category: "Cultura Generală",
  },
];

export default function HomePage() {
  return (
    <div>
      <h1>Bine ai venit la Quiz-uri!</h1>
      <h2>Alege un quiz din categoria "Cultura Generală":</h2>
      
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.id}>
            <Link href={`/quiz/${quiz.id}`}>
              {quiz.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
