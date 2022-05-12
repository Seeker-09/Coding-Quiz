// variables to hold already existing elements 
var startButtonEl = document.getElementById("startButton");
var countdownEl = document.getElementById("countdown");
var questionEl = document.getElementById("question");
var answerListEl = document.getElementById("answerList");

/* CREATE NEW ELEMENTS */
// create list elements for answers
var answer1LiEl = document.createElement("li");
var answer2LiEl = document.createElement("li");
var answer3LiEl = document.createElement("li");
var answer4LiEl = document.createElement("li");

// create button elements for answers
var answer1BtnEl = document.createElement("button");
var answer2BtnEl = document.createElement("button");
var answer3BtnEl = document.createElement("button");
var answer4BtnEl = document.createElement("button");

// array to hold questions and answers
var questionObjArr = [
    {
        question: "does this work?",
        answer1: "yes",
        answer2: "no",
        answer3: "maybe", 
        answer4: "def no",
        correctAnswer: "yes" // how to make refer to correct answer's text??
    },
    {
        question: "how did i get here?",
        answer1: "you didn't",
        answer2: "haha",
        answer3: "idk", 
        answer4: "what",
        correctAnswer: "haha"
    }
];

startButtonEl.addEventListener("click", function() {
    var arrayCounter = 0;
    var quizTime = 4;
    // to prevent a long delay, I need to disply time + 1
    countdownEl.textContent = quizTime + 1;

    var quizTimer = setInterval(function() {
        // display countdown
        countdownEl.textContent = quizTime;
        quizTime--;

        /* DISPLAY QUESTIONS AND ANSWERS */
        // fill text content 
        questionEl.textContent = questionObjArr[arrayCounter].question;
        answer1BtnEl.textContent = questionObjArr[arrayCounter].answer1;
        answer2BtnEl.textContent = questionObjArr[arrayCounter].answer2;
        answer3BtnEl.textContent = questionObjArr[arrayCounter].answer3;
        answer4BtnEl.textContent = questionObjArr[arrayCounter].answer4;

        // append buttons to li
        answer1LiEl.appendChild(answer1BtnEl);
        answer2LiEl.appendChild(answer2BtnEl);
        answer3LiEl.appendChild(answer3BtnEl);
        answer4LiEl.appendChild(answer4BtnEl);

        // append li to ul
        answerListEl.appendChild(answer1LiEl);
        answerListEl.appendChild(answer2LiEl);
        answerListEl.appendChild(answer3LiEl);
        answerListEl.appendChild(answer4LiEl);
    }, 1000)

    /* ANSWER BUTTON LISTENERS */
    answer1BtnEl.addEventListener("click", function() {
        if(answer1BtnEl.textContent === questionObjArr[arrayCounter].correctAnswer) {
            console.log("correct");
            arrayCounter++;
        }
        else {
            console.log("Wrong answer, try again");
        }
    })

    answer2BtnEl.addEventListener("click", function() {
        if(answer2BtnEl.textContent === questionObjArr[arrayCounter].correctAnswer) {
            console.log("correct");
            arrayCounter++;
        }
        else {
            console.log("Wrong answer, try again");
        }
    })

    answer3BtnEl.addEventListener("click", function() {
        if(answer3BtnEl.textContent === questionObjArr[arrayCounter].correctAnswer) {
            console.log("correct");
            arrayCounter++;
        }
        else {
            console.log("Wrong answer, try again");
        }
    })

    answer4BtnEl.addEventListener("click", function() {
        if(answer4BtnEl.textContent === questionObjArr[arrayCounter].correctAnswer) {
            console.log("correct");
            arrayCounter++;
        }
        else {
            console.log("Wrong answer, try again");
        }
    })
});

