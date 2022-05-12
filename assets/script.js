var playerScore=0;
var timeRemaining=120;
var questionEl=document.getElementById("question");
var choicesEl=document.getElementById("choices");
startButton.addEventListener('click', startQuiz);
//click start button to start quiz
function startQuiz(){
    if (instructions.style.display !=="none"){
        instructions.style.display ="none";
        quizBox.style.display="block"
    };
    showQuestion(question)
    console.log(questions);
}    
    function showQuestion() {   
        for(var i=0; i<questions.length; i++);
        questionEl=questions[i];
}

    //after submit, show next question
//if answer was correct update score
//if answer was incorrect subtract timer
//after last question, give final score
//ask for initials
//save score to local storage
//on high scores click, take to page with high scores

//create questions

var questions= [
    {question: "Which JavaScript data type is always either true or false?",
     choices: [
            "String", 
            "Boolean", 
            "Array",
            "Object",
        ],
        correctAnswer: 2
    },
    {question: "String values must be enclosed in what?",
        choices: [
            "Quotes",
            "Curly brackets",
            "Parentheses",
            "None of the above",
        ],
        correctAnswer:1
    },
    {question: "What does JSON stand for?",
        choices: [
            "JavaScript Open Now",
            "JavaScript Open Notation",
            "JavaScript Object Notation",
            "JavaScript?! OH, NO!",
        ],
        correctAnswer: 3

    },
    {question: "Where is the best place to put a variable you will use in multiple functions?",
        choices: [
            "Local Scope",
            "Global Scope",
            "Microscope",
            "Jonathan Schoop",
        ],
        correctAnswer:2
    },
    {question: "How do you retrieve information from local storage?",
        choices: [
            "localStorage.getItem",
            "localStorage.setItem",
            "localStorage.betItem",
            "localStroage.petItem",
        ],
        correctAnswer: 1
    },

]
    