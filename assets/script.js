var playerScore=0
var timer= 120
var timerSpan=document.getElementById("timer");
let currentQuestion=0;
const quizEl=document.getElementById("questionContainer");
const questionEl=document.getElementById("question");
const choicesEl=document.querySelectorAll(".answer");
const aText=document.getElementById("aText");
const bText=document.getElementById("bText");
const cText=document.getElementById("cText");
const dText=document.getElementById("dText");
const nextButton=document.getElementById("nextButton");
const highScoresPage=document.getElementById("highScorePage");
var highScore=document.querySelector(".highScore");
var highScoreName="";
startButton.addEventListener('click', startQuiz)
scoreButton.addEventListener('click', seeHighScores)

function getPlayerName(){
    var playerName=window.prompt("Your game has ended. Please enter your name to save your score of " + playerScore)
}
//set questions
const questionsArray=[
    {question: "Which JavaScript data type is always either true or false?",
                a: "String",
                b: "Boolean",
                c: "Object",
                d: "Array",
                correct: "b",    
},
    {question: "String values must be enclosed in what?",
                a: "Quotes",
                b: "Parentheses",
                c: "Curly Brackets",
                d: "None of the Above",
                correct: "a",
        },
    {question: "What does JSON stand for?",
        
                a: "JavaScript Open Now",
                b: "JavaScript Object Notation",
                c: "JavaScript Open Notation",
                d: "JavaScript?! OH, NO!",
                correct: "b",
    },
    {question: "Where is the best place to put a variable you will use in multiple functions?",
        
                a: "Local Scope",
                b: "Global Scope",
                c: "Microscope",
                d: "Jonathan Schoop",
                correct: "b",
},
    {question: "How do you retrieve information from local storage?",
        
                a: "Let Item",
                b: "Pet Item",
                c: "Set Item",
                d: "Get Item",
                correct: "d",
        },
];

function seeHighScores(){
    if (instructions.style.display !=="none"){
        instructions.style.display = "none";
    }
    if (quizBox.style.display !=="none"){
        quizBox.style.display = "none";
    }
    highScoresPage.style.display="block";
    highScore=localStorage.getItem(highScore)
    highScore.textContent=playerScore;
    
}
//click start button to start quiz
function startQuiz(){
    if (instructions.style.display !=="none"){
        instructions.style.display ="none";
        quizBox.style.display="block";
    }
};
    showQuestion();
//begin timer    
    startTimer();
    function startTimer(){
        timeRemaining=setInterval(()=>{
            timer--;
            if (timer>0){
                timerSpan.textContent=timer
            }
            if(timer === 0){
                clearInterval(timer)
                window.alert("Time is up, please try again.")
                seeHighScores();
            }
        },1000)
    }       

//show first question
function showQuestion() { 
        const currentQuestionData=questionsArray[currentQuestion]
        questionEl.textContent=currentQuestionData.question;
        aText.textContent=currentQuestionData.a;
        bText.textContent=currentQuestionData.b;
        cText.textContent=currentQuestionData.c;
        dText.textContent=currentQuestionData.d;
}
    function uncheckAnswer(){
        choicesEl.forEach(choicesEl=>choicesEl.checked=false)
    }
        //check if answer is correct
        function checkAnswer(){
            let playerChoice
            choicesEl.forEach(chosenEl => {
                if(chosenEl.checked) {
                    playerChoice=chosenEl.id
                }
            })
            return playerChoice
        }
        submitButton.addEventListener("click",()=>{
            const playerChoice=checkAnswer()
            //if answer is correct update player score and show rightAnswer text        
            if (playerChoice) {
            if (playerChoice === questionsArray[currentQuestion].correct){
                playerScore=playerScore+20;
                rightAnswer.style.display="block";
            }
        //if answer is wrong deduct time
             else{
                wrongAnswer.style.display="block";
                timer=timer-10;
            }
        }
        })
            nextButton.addEventListener("click",()=>{
                    currentQuestion++
                    console.log(score);
                    if(currentQuestion<questionsArray.length){
                        showQuestion ()
                        if (rightAnswer.style.display="block"){
                            rightAnswer.style.display="none";
                        }
                        if (wrongAnswer.style.display="block"){
                            wrongAnswer.style.display="none";
                        }
                        console.log(playerScore);
                    }
                    //after last question give final score and ask for name
                    else {getPlayerName();
                    seeHighScores();
                    }
                    localStorage.setItem("highScore",playerScore)
                    localStorage.setItem("highScoreName", playerName)
                    
                    
                })

//save score to local storage
//on high scores click, take to page with high scores