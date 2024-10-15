import React from "react"
import { useRouter } from "next/router";
import Link from "next/link";
import {RadioGroup, Radio} from "@nextui-org/radio";

export default function QuestionPage(){


  const quizzes = {
      1: [
        { 
         title: "In which country is K2 located?", 
         options: ["India", "Nepal", "Pakistan"], 
         answer: "Pakistan" },
        { 
        
        title: "What's the highest mountain in Africa?", 
        options: ["Manaslu", "Kilimanjaro", "Annapurna"], 
        answer: "Kilimanjaro" },
        { 
        
        title: "How many countries is Mont Blanc located in?", 
        options: ["1", "2", "3"], 
        answer: "3" },
        ],
       
     2: [
         { 
           
           title: "When did WW2 start?", 
           options: ["1939", "1945", "1960"], 
           answer: "1939" },
        { 
            
            title: "Who was the communist ruler in Romania?", 
            options: ["Ceausescu", "Hitler", "Stalin"], 
            answer: "Ceausescu" },
        { 
            
            title: "When was the COVID-19 outbreak?", 
            options: ["2000", "2015", "2020"], 
            answer: "2020" },
          ],

     3: [
        { 
          
          title: "What's the biggest animal on the planet?",
          options: ["Elephant", "Blue Whale", "Colossal Squid"], 
          answer: "Blue Whale" },
        { 
          
          title: "What's the fastest animal in the world?", 
          options: ["Dog", "Antelope", "Cheetah"], 
          answer: "Cheetah" },
        { 
          
          title: "Where are the most bears in Europe?", 
          options: ["Poland", "Romania", "France"], 
          answer: "Romania" },
          ]
        };

    const router = useRouter();
    const {quizId,questionId}= router.query;
    const questionIdx = parseInt(questionId)-1;
    const currentQuiz = quizzes[quizId];
    const currentQuestion = currentQuiz ? currentQuiz[questionIdx] : null;
    
    



return (
  
    < div className="container">
        <h1>Good luck!</h1>
       <div className="list"> 
         <h2>{currentQuestion.title}</h2>
         <ul>
          {currentQuestion.options.map((pick) => (
            <li>{pick} </li>
          ))}
          </ul>
       </div>

      {questionIdx + 1 < currentQuiz.length && (
      <Link href={`/quiz/${quizId}/question/${questionIdx + 2}`}>
        <div className="button-container">
          <button>Next Question</button>
        </div>
      </Link>
)}
  </div>
)}