import React, { useState, useEffect } from "react";
import { useRouter } from "next/router"; 
import Link from "next/link";

export default function QuestionPage() {
  const router = useRouter(); 
  const { quizId, questionId } = router.query; 
  const currentQuestionId = parseInt(questionId) -1 ;

  const [data, setData] = useState('');
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [showScore, setShowScore] = useState(false);
  const [result, setResult] = useState('');
  const [questionPage, setQuestionPage] = useState(false);
  const [inputValue, setInputValue] = useState({question:'', options:'', answer:''})

  useEffect(() => {
    if (quizId && questionId) {
      fetch(`/api/questions?quizId=${quizId}&questionId=${questionId}`)
        .then(res => res.json())
        .then(setData)
        .catch(console.error);
    }
  }, [quizId, questionId]);

  
  if (!data) {
    return 'Loading...';
  }

  function handleChangeOptions(e) {
    setSelectedOption(e.target.value);
  }

  function handleSubmitQuestions(e){
    const { name, value } = e.target;
    setInputValue((prevFormData) => ({ ...prevFormData, [name]: value }));
    }

    function handleSubmit(e) {
      e.preventDefault();
      const newQuestion = {
        title: inputValue.question,
        options: inputValue.options.split(',').map(option => option.trim()),  
        answer: inputValue.answer
      };
    
      fetch('/api/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          quizId: quizId,  
          newQuestion: newQuestion
        })
      })
      .then(res => res.json())
      .then(data)
      .catch(console.error);
    }
    
  function handleCheck() {
    if (selectedOption === data.answer) {
      setResult("You rock!");
      setScore(score + 1);
    } else {
      setResult("Wrong answer :( ");
    }
  }

  function handleNext() {
    setSelectedOption('');
    setResult('');
    if (currentQuestionId + 1 < data.quiz.length) {
      router.push(`/quiz/${quizId}/question/${currentQuestionId + 2}`);  
    } else {
      setShowScore(true);  
    }
  }

  function writeQuestionPage(){
     setQuestionPage(true);
   }
   
  if (questionPage){
   return(
    <form onSubmit = {handleSubmit}>
      <h1>Write your question below</h1>
     <label htmlFor="question">Add a question</label>
     <input type="text" id="question" name="question" defaultValue={inputValue.question} onChange={handleSubmitQuestions}/><br />
     <label htmlFor="options">Add options</label>
     <input type="text" id="options" name="options" defaultValue={inputValue.options} onChange={handleSubmitQuestions}/><br />
     <label htmlFor="answer">Answer</label>
     <input type="text" id="answer" name="answer" defaultValue={inputValue.answer} onChange={handleSubmitQuestions} /><br />
     <button type="submit" className="btn">Submit question</button>
      <div className="button-container">
          <Link href="../../../categories">
            <button>Go back</button>
          </Link>
        </div>
    </form>
    )
  }

 if (showScore) {
     return (
       <div className="container">
        <h1>You finished the quiz!</h1>
        <p>You scored {score} out of {data.quiz.length}</p>
        <div className="button-container">
          <Link href="../../../categories">
            <button>Go to categories</button>
          </Link>
        </div>
           <button type="button" className="question-button" onClick={writeQuestionPage}>Write a question</button>
      </div>   
    );
  }

return (
  <div className="container">
    <h1>{currentQuestionId + 1}. {data.title}</h1>
    <hr />
    <div className="list">
      {data.options.map(q => (
        <div key={q}>
          <input type="radio" name="quizOption" value={q} onChange={handleChangeOptions} />
          <label>{q}</label>
        </div>
      ))}
      <div className="text">{result}</div>
      <div className="box">
        <button className="btn" type="button" onClick={handleCheck}>Check answer</button>
        <p className="index">Score: {score}</p>
      </div>
    </div>
      <button className="btn" onClick={handleNext}>
        {currentQuestionId + 1 < data.quiz.length ? "Next Question" : "See Results"}
      </button>
      <p>{currentQuestionId + 1} of {data.quiz.length} questions</p>
    </div>
  );
 }

