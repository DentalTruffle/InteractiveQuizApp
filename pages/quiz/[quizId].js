import Link from "next/link"
import { useRouter } from 'next/router';


  export default function selectQuiz(){
    const quizzes=['Mountains', 'Events', 'Curiosities']
    const router = useRouter();
    const {quizId}  = router.query; 
   
    return (
        < div className="container">
          <h1>{quizzes[quizId - 1]} Quiz</h1>
          <Link href={`/quiz/${quizId}/question/1`}>
          <div className="button-container">
           <button>Test your knowledge</button>
          </div>
          </Link> 
        </div>
    )
  }
  