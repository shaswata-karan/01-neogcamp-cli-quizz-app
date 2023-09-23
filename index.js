var readlineSync = require("readline-sync");
var score = 0;

var username = readlineSync.question("Enter your name? ");
console.log("Welcome " + username + ", how well do you know Shaswata?");
console.log("This cli quiz app is created by him.");

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score = score + 1;
  } else {
    console.log("wrong!");
  }
  console.log("Current score: ", score);
  console.log("-------------");
}

// array of objects
var questions = [
  {
    question: "Where do he live? ",
    answer: "Kolkata",
  },
  {
    question: "What is his age? ",
    answer: "22",
  },
  {
    question: "What is his hobby? ",
    answer: "Photography",
  },
  {
    question: "Which is his favourite snack? ",
    answer: "Momo",
  },
  {
    question: "What is his nickname? ",
    answer: "Sunny",
  },
];

// loop-function call
for (let i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer);
}

// display the final score to the user
console.log("YAY! YOU SCORED: ", score);