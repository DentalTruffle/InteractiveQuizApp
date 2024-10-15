import Link from "next/link";
import React from "react";

export default function categoryPage(){

    const categories = [
        { name: 'Geography', quizId: 1 },
        { name: 'History', quizId: 2 },
        { name: 'Animals', quizId: 3 }
    ];
    return (
       <div className="container">    
         <h1>Please select a category</h1>
         <hr/>
        <div className="list">
          {categories.map(category => (
            <Link key={category.quizId} href={`/quiz/${category.quizId}`}> <h2>{category.name}</h2></Link>
             ))}
        </div> 
    </div> 
    );
};


 




