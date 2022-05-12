/* NOTES TO SELF:
    find out how to turn listeners into one funciton.
*/

// general break elements
var break1El = document.createElement("br");
var break2El = document.createElement("br");
var break3El = document.createElement("br");

// variables to hold already existing elements 
var bodyEl = document.getElementById("body");
var mainSection = document.getElementById("mainSection")
var startButtonEl = document.getElementById("startButton");
var countdownEl = document.getElementById("countdown");
var questionEl = document.getElementById("question");
var answerListEl = document.getElementById("answerList");

/* CREATE NEW ELEMENTS */
// create button elements for answers
var answer1BtnEl = document.createElement("button");
var answer2BtnEl = document.createElement("button");
var answer3BtnEl = document.createElement("button");
var answer4BtnEl = document.createElement("button");

// Game over element
var gameOverEl = document.createElement("h1");

// save score elements
var saveScoreSectionEl = document.createElement("section");
var saveScoreEl = document.createElement("h2");
var showScoreEl = document.createElement("h3");
var initialsPromptEl = document.createElement("h4");
var initialsInputEl = document.createElement("textarea");
var saveButtonEl = document.createElement("button");

// thanks for playing elements
var thanksForPlayingEl = document.createElement("h1");

/* SET ATTRIBUTES FOR CREATED ELEMENTS */

// array to hold questions and answers objects
var questionObjArr = [
    {
        question: "Commonly Used Data Types DO NOT INCLUDE:",
        answer1: "strings",
        answer2: "booleans",
        answer3: "alerts", 
        answer4: "numbers",
        correctAnswer: "alerts" // how to make refer to correct answer's text??
    },
    {
        question: "The condition in an if/else statment is enclosed in: ",
        answer1: "quotes",
        answer2: "curly brackets",
        answer3: "parentheses", 
        answer4: "square brackets",
        correctAnswer: "parentheses"
    },
    {
        question: "Arrays in javascrpt can be used to store: ",
        answer1: "numbers an strings",
        answer2: "booleans",
        answer3: "other arrays", 
        answer4: "all of the above",
        correctAnswer: "all of the above"
    },
    {
        question: "String values must be enclosed with _____ when being assigned to variables.",
        answer1: "quotes",
        answer2: "curly brackets",
        answer3: "parentheses", 
        answer4: "square brackets",
        correctAnswer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        answer1: "JavaScript",
        answer2: "terminal/bash",
        answer3: "for loops", 
        answer4: "console.log",
        correctAnswer: "console.log"
    }
];

startButtonEl.addEventListener("click", function() {
    // remove start button
    startButtonEl.remove();
    var score = 0;
    var arrayCounter = 0;
    var questionArrayLength = questionObjArr.length;
    var quizTime = 29; // see comment below

    // to prevent a long delay, I need to disply time + 1
    countdownEl.textContent = quizTime + 1;

    // no delay in displaying the question
    questionEl.textContent = questionObjArr[arrayCounter].question;
    answer1BtnEl.textContent = questionObjArr[arrayCounter].answer1;
    answer2BtnEl.textContent = questionObjArr[arrayCounter].answer2;
    answer3BtnEl.textContent = questionObjArr[arrayCounter].answer3;
    answer4BtnEl.textContent = questionObjArr[arrayCounter].answer4;

    // append buttons to div
    answerListEl.appendChild(answer1BtnEl);
    answerListEl.appendChild(break1El);
    answerListEl.appendChild(answer2BtnEl);
    answerListEl.appendChild(break2El);
    answerListEl.appendChild(answer3BtnEl);
    answerListEl.appendChild(break3El);
    answerListEl.appendChild(answer4BtnEl);

    /* ANSWER BUTTON LISTENERS */
    answer1BtnEl.addEventListener("click", function() {
        if(answer1BtnEl.textContent === questionObjArr[arrayCounter].correctAnswer) {
            score++;
        }
        else {
            quizTime -= 5;
        }
        arrayCounter++;
    })

    answer2BtnEl.addEventListener("click", function() {
        if(answer2BtnEl.textContent === questionObjArr[arrayCounter].correctAnswer) {
            score++;
        }
        else {
            quizTime -= 5;
        }
        arrayCounter++;
    })

    answer3BtnEl.addEventListener("click", function() {
        if(answer3BtnEl.textContent === questionObjArr[arrayCounter].correctAnswer) {
            score++;
        }
        else {
            quizTime -= 5;
        }
        arrayCounter++;
    })

    answer4BtnEl.addEventListener("click", function() {
        if(answer4BtnEl.textContent === questionObjArr[arrayCounter].correctAnswer) {
            score++;
        }
        else {
            quizTime -= 5;
        }
        arrayCounter++;
    })

    var quizTimer = setInterval(function() {
        // display countdown
        countdownEl.textContent = quizTime;
        quizTime--;

        /* DISPLAY QUESTIONS AND ANSWERS */
        // fill text content 
        if(arrayCounter != questionArrayLength) // if statment just to prevent a warning
        {
            questionEl.textContent = questionObjArr[arrayCounter].question;
            answer1BtnEl.textContent = questionObjArr[arrayCounter].answer1;
            answer2BtnEl.textContent = questionObjArr[arrayCounter].answer2;
            answer3BtnEl.textContent = questionObjArr[arrayCounter].answer3;
            answer4BtnEl.textContent = questionObjArr[arrayCounter].answer4;
        }

        // end game if time is up and save score 
        if(quizTime < 0 || arrayCounter === questionArrayLength) { // less than 0 because of how the function updates
            clearInterval(quizTimer);
            mainSection.remove(); // remove everything
            // set text content for elements
            gameOverEl.textContent = "Game Over";
            saveScoreEl.textContent = "Save Your Score";
            showScoreEl.textContent = "Your score is: " + score;
            saveButtonEl.textContent = "Save";
            initialsPromptEl.textContent = "Enter Your Initials"

            // append elements to section
            saveScoreSectionEl.appendChild(gameOverEl);
            saveScoreSectionEl.appendChild(saveScoreEl);
            saveScoreSectionEl.appendChild(showScoreEl);
            saveScoreSectionEl.appendChild(initialsPromptEl);
            saveScoreSectionEl.appendChild(initialsInputEl);
            saveScoreSectionEl.appendChild(break1El);
            saveScoreSectionEl.appendChild(saveButtonEl);

            // append section to body
            bodyEl.appendChild(saveScoreSectionEl);

            // save user and score to local storage
            saveButtonEl.addEventListener("click", function() {
                var userScore = {
                    user: initialsInputEl.value.trim(),
                    score: score
                };

                // save score to local storage
                localStorage.setItem("user", JSON.stringify(userScore));

                // remove section after save
                saveScoreSectionEl.remove();

                // display thanks for playing
                thanksForPlayingEl.textContent = "Thanks for playing!";
                bodyEl.appendChild(thanksForPlayingEl);
            });
        }
    }, 1000)
});

