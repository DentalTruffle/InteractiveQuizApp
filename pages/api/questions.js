import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), 'public', 'questions.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const data = JSON.parse(jsonData);

  if (req.method === 'GET') {
   const { quizId, questionId } = req.query;
   const selectedQuestion = questionId - 1;

   const currentQuiz = data.quizzes.find(q => q.id == quizId);
     if (!currentQuiz) {
       return res.status(404).json({ message: 'Quiz not found' });
     }
     
   const currentQuestion = currentQuiz.quiz[selectedQuestion];
     if (!currentQuestion) {
       return res.status(404).json({ message: 'Question not found' });
    }
       return res.status(200).json({ ...currentQuestion, quiz: currentQuiz.quiz });
   } 
  
  if (req.method === 'POST') {
    const { quizId, newQuestion } = req.body;
    const currentQuiz = data.quizzes.find(q => q.id == quizId);
     if (!currentQuiz) {
       return res.status(404).json({ message: 'Quiz not found' });
     }

    currentQuiz.quiz.push(newQuestion);
    await fs.writeFile(filePath, JSON.stringify(data));
    return res.status(200).json({ message: 'Question added successfully' });
  }
}

