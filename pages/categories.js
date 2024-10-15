import Link from "next/link";
import { useRouter } from "next/router";
 import React from "react";

 

export default function categoryPage(){

      const categories = [
        { name: 'Geography', quizId: 1 },
        { name: 'History', quizId: 2 },
        { name: 'Animals', quizId: 3 }
    ];


    return (
      
    <>
            <h1>Please select a category</h1>
        <div className="list">
             {categories.map(category => (
        <Link href={`/quiz/${category.quizId}`}> <h2>{category.name}</h2></Link>
             ))}
        </div>    
     </>
    );
};


 




