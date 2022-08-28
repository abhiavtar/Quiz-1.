readlineSync = require('readline-sync');
console.log("Welcome to the DO YOU KNOW Abhijit quiz!");
var username = readlineSync.question("What's your name? ");
console.log("\nHello " + username + " let's begin");
console.log("--------------------------------");

//questions
var questions = [
  {
    question: "Where do I live? ",
    answer: "Kolkata"
  },
  {
    question: "What's my age? ",
    answer: "23",
  },
  {
    question: "what did i like the most? ",
    answer: "Travelling"
  },
  {
    question: "Which school am I from? ",
    answer: "Jmi"
  },
  {
    question: "Do I have a bike? ",
    answer: "yes"
  }
]

//answerCheck
var score = 0;
function play(question, answer) {
  var userAnswer = readlineSync.question(question)
  if (userAnswer.toUpperCase() == answer.toUpperCase()) {
    console.log("You're correct!");
    score++;
    console.log("score: ", score);
    console.log("--------------------------------");
  }
  else {
    console.log("Oops that's incorrect!");
    console.log("score: ", score);
    console.log("Right answer is : " + answer);
    console.log("--------------------------------");
  }
}

//toTraverse
for (i = 0; i < questions.length; i++) {
  var current = questions[i];
  play(current.question, current.answer);
}

//showScore
console.log(username + " your final score is: ", score);
