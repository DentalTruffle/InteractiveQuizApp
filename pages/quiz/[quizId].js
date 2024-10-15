import Link from "next/link"
 import { useRouter } from 'next/router';


  export default function selectQuiz(){

    const quizzes=['Mountains', 'Events', 'Curiosities']
    
    const router = useRouter();
    const {quizId}  = router.query; 
      const quizIdx =  parseInt(quizId) 

    return (
        < div className="container">
          <Link href={`/quiz/${quizIdx}/question/1`}><h1>{quizzes[quizId - 1]} Quiz</h1>
      
          <div className="button-container">
           <button>Test your knowledge</button>
          </div>
          </Link> 
        </div>
    )
    
  }
  