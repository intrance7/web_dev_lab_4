// ==========================================
// Lab Assignment 4 - JavaScript Console Quiz
// Author: Tanishq Sethi
// ==========================================

// Step 1: Array of Questions
const quizQuestions = [
    {
        question: "What does HTML stand for?",
        answer: "hyper text markup language"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        answer: "let"
    },
    {
        question: "What symbol is used for comments in JavaScript?",
        answer: "//"
    },
    {
        question: "What method is used to convert input to lowercase?",
        answer: "tolowercase"
    },
    {
        question: "Which loop is commonly used to iterate through arrays?",
        answer: "for loop"
    }
];

// Step 2: Function to Start Quiz
function runQuiz() {

    let score = 0; // Step 3: Score counter

    // Step 4: Loop through questions
    for (let i = 0; i < quizQuestions.length; i++) {

        let userAnswer = prompt(quizQuestions[i].question); // Step 5: Ask question

        if (userAnswer === null) {
            alert("Quiz cancelled.");
            return;
        }

        // Step 6: Normalize the input
        userAnswer = userAnswer.toLowerCase().trim();

        const correctAnswer = quizQuestions[i].answer.toLowerCase().trim();

        // Step 7: Check answer
        if (userAnswer === correctAnswer) {
            score++;
            alert("Correct! 🎉");
        } else {
            alert("Wrong ❌\nCorrect answer: " + quizQuestions[i].answer);
        }
    }

    // Step 9: Final score
    alert(`Quiz finished!\nYour score: ${score} / ${quizQuestions.length}`);
}

// Step 10: Run in browser console
// Just call runQuiz() in the console

