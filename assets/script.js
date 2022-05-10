var playerScore=0;
var timeRemaining=120;
startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', nextQuestion);
//click start button to start quiz
function startQuiz(){
    if (instructions.style.display !=="none"){
        instructions.style.display ="none";
        quizBox.style.display="block"
    };
function nextQuestion(){

}
function chooseAnswer(){
    
}
    if (questions.length>currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
    }
    //after submit, show next question
//if answer was correct update score
    if (playerChoice=answer) {
        playerScore=playerScore + 20;
    }
//if answer was incorrect subtract timer
    else {timeRemaining=timeRemaining-10};
//after last question, give final score
    var finalScore=playerScore;
//ask for initials
//save score to local storage
//on high scores click, take to page with high scores
}
//create questions

const questions= [
    {question: "Which JavaScript data type is always either true or false?",
        choices: [
            {text:"String", correct: false},
            {text:"Boolean", correct: true},
            {text:"Array", correct: false},
            {text:"Object", correct: false},
        ]

    },
]
showQuestion()