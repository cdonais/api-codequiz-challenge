//click start button to start quiz
//show first question
//after submit, show next question
//after last question, give score
//ask for initials
//save score to local storage
//on high scores click, take to page with high scores

//create questions

let questions= [
    {number: 1,
        question: "Which JavaScript data type is always either true or false?",
        answer: "Booleans",
        choices: [
            "String",
            "Boolean",
            "Array",
            "Object",
        ]

    },
    {number: 2,
        question: "String values must be enclosed in what?",
        answer: "Quotes",
        choices: [
            "Quotes",
            "Curly brackets",
            "Paranthesis",
            "None of the above",
        ]
    },
    {number: 3,
        question: "What does JSON stand for?",
        answer: "JavaScript Object Notation",
        choices: [
            "JavaScript Open Note",
            "JavaScript Open Notation",
            "JavaScript Object Notation",
            "JavaScript?! OH, NO!",
        ]

    },
    {number: 4,
        question: "Where is the best place to put a variable you will use in multiple functions?",
        answer: "Global Scope",
        choices: [
            "Local Scope",
            "Global Scope",
            "Microscope",
            "Jonathan Schoop",
        ]    
    },
    {number: 5,
        question: "How do you retrieve information from local storage?",
        answer: "localStorage.getItem",
        choices: [
            "localStorage.getItem",
            "localStorage.setItem",
            "localStorage.betItem",
            "localStroage.petItem",
        ]
    },

]