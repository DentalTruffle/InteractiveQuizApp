This is an interactive Quiz App. For instructions of how to play it, please read the following instructions:

## Getting Started

First, run the development server on the terminal:

npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Editing

*You can start editing the page by modifying `pages\index.js`. The page auto-updates as you edit the file.
*You will see there 3 main categories, which you can update anytime in `pages\categories.js`.
*From there you will be redirected to their following quiz. If you want to add a new quiz to each category, you can do this from `pages\quiz\[quizId].js`.
*The main app has 3 different questions for each quiz. If you feel inspired and want to add a new one, feel free to do that in the form on the app. If the form looks to simple to you, you can add/remove a field anytime in `pages\quiz\[quizId]\question\[questionId].js`.
*You will see all the questions in the file `public\questions.json`.
*The last but not the least, the API route can be find in `pages\api`.

## Learn More

The app is interactive, and it test your general knowledge in Geography, History and Animal World. The score will update each time you give a correct answer.If you had fun, the last section(the score page), you can either return to the categories and choose another test to continue the fun, or you can contribute y adding another question. 

Thank you for choosing our app!
