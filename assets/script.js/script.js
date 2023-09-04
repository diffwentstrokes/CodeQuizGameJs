var scores = document.querySelector(".scores") 
var timer = 60;











var questions = [
    {
        question:"whats JavaScripts intended purpose?",
        answer:"allows to make web pages interactive",
        choices: [
            "coffee",
            "make life easy",
            "web api",
            "allows to make web pages interactive"
        ]
    }
,
    {
        question:"what is a data type that exist in JavaScript",
        answer:"boolean",
        choices: [
            "soup",
            "string violin",
            "obstacle",
            "boolean"
        ]

    }
];

var questionEl = document.getElementById("question");

    questionEl.textContent = questions[0].question;

var questionEl2 = document.getElementById("question");

    questionEl2.textContent = questions[1].question;

function startTimer() {
    setInterval(function () {
        timer--;
    }, 1000);
}






