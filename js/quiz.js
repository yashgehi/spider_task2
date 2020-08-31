const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const scoreText = document.getElementById("score");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let correctAnswers = [];
let incorrectAnswers = [];
let answeredQuestions = [];

let questions = [];

fetch("question.json")
    .then((res) => {
        return res.json();
    })
    .then((loadedQuestions) => {
        questions = loadedQuestions;
        startGame();
    })
    .catch((err) => {
        console.error(err);
    });

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startGame = () => {
    questions = questions.sort(() => Math.random() - 0.5);
    score = 0;
    //console.log(questions);
    getNewQuestion(questionCounter);
};

getNewQuestion = (questionCounter) => {
    if (questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);
        //go to the end page
        return window.location.assign("/end.html");
    }
    currentQuestion = questions[questionCounter];
    //console.log(currentQuestion);
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });
    acceptingAnswers = true;

};



choices.forEach((choice) => {
    choice.addEventListener("click", (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
        answeredQuestions.push(currentQuestion.question);
        console.log(answeredQuestions);

        if (classToApply === "correct") {
            incrementScore(CORRECT_BONUS);
            correctAnswers.push(currentQuestion["choice" + selectedAnswer]);
            //console.log(correctAnswers);
        }
        incorrectAnswers.push(currentQuestion["choice" + selectedAnswer]);
        //console.log(incorrectAnswers);
        selectedChoice.parentElement.classList.add(classToApply);

        document
            .querySelector(".next-question ")
            .addEventListener("click", function () {
                selectedChoice.parentElement.classList.remove(classToApply);
            });

        document
            .querySelector(".previous-question ")
            .addEventListener("click", function () {
                selectedChoice.parentElement.classList.remove(classToApply);
            });
        document
            .querySelector(".dropbtn ")
            .addEventListener("click", function () {
                selectedChoice.parentElement.classList.remove(classToApply);
            });


        // questionCounter++;
    });
});

incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
};

submit = () => {
    questionCounter++;
    getNewQuestion(questionCounter);
    if (answeredQuestions.includes(currentQuestion.question)) {
        acceptingAnswers = false;
        alert('You have already answered this question')
    };
}

previous = () => {
    questionCounter--;
    getNewQuestion(questionCounter);
    if (answeredQuestions.includes(currentQuestion.question)) {
        acceptingAnswers = false;
        alert('You have already answered this question')
    };
};

// dropdown list

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function buttonClicked(clickedNumber) {
    if (clickedNumber == 'one') {
        questionCounter = 0;

        getNewQuestion(questionCounter);
        if (answeredQuestions.includes(currentQuestion.question)) {
            acceptingAnswers = false;
            alert('You have already answered this question')
        };
    } else if (clickedNumber == 'two') {
        questionCounter = 1;

        getNewQuestion(questionCounter);
        if (answeredQuestions.includes(currentQuestion.question)) {
            acceptingAnswers = false;
            alert('You have already answered this question')
        };
    } else if (clickedNumber == 'three') {
        questionCounter = 2;

        getNewQuestion(questionCounter);
        if (answeredQuestions.includes(currentQuestion.question)) {
            acceptingAnswers = false;
            alert('You have already answered this question')
        };


    } else if (clickedNumber == 'four') {
        questionCounter = 3;

        getNewQuestion(questionCounter);
        if (answeredQuestions.includes(currentQuestion.question)) {
            acceptingAnswers = false;
            alert('You have already answered this question')
        };
    } else if (clickedNumber == 'five') {
        questionCounter = 4;

        getNewQuestion(questionCounter);
        if (answeredQuestions.includes(currentQuestion.question)) {
            acceptingAnswers = false;
            alert('You have already answered this question')
        };
    } else if (clickedNumber == 'six') {
        questionCounter = 5;

        getNewQuestion(questionCounter);
        if (answeredQuestions.includes(currentQuestion.question)) {
            acceptingAnswers = false;
            alert('You have already answered this question')
        };
    } else if (clickedNumber == 'seven') {
        questionCounter = 6;

        getNewQuestion(questionCounter);
        if (answeredQuestions.includes(currentQuestion.question)) {
            acceptingAnswers = false;
            alert('You have already answered this question')
        };
    } else if (clickedNumber == 'eight') {
        questionCounter = 7;

        getNewQuestion(questionCounter);
        if (answeredQuestions.includes(currentQuestion.question)) {
            acceptingAnswers = false;
            alert('You have already answered this question')
        };
    } else if (clickedNumber == 'nine') {
        questionCounter = 8;

        getNewQuestion(questionCounter);
        if (answeredQuestions.includes(currentQuestion.question)) {
            acceptingAnswers = false;
            alert('You have already answered this question')
        };
    } else if (clickedNumber == 'ten') {
        questionCounter = 9;

        getNewQuestion(questionCounter);

    }
}