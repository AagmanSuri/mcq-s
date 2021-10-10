const readlineSync = require("readline-sync");
const chalk = require("chalk");

const userName = readlineSync.question(chalk.blue("What is your Name ? "));

console.log(chalk.white.bgBlack.bold("Welcome " + userName + " to the game "));
console.log(chalk.green("------------------------------------"));

var score = 0;
const questionsArray = [
  {
    question:
      "Where does Rocket Raccoon spend most of his time?\n a)on Earth \n b)In Space\n c)under the sea \n d)In the rubbish bins \n",
    answer: "b"
  },
  {
    question:
      "J.A.R.V.I.S was programmed by Captain America. True or false?\n a)True \n b)False\n",
    answer: "b"
  },
  {
    question:
      "Whose nickname is 'Murder Bot'? \n a)Iron Man \n b)Vision \n c)Hulk Buster \n d)Ultron \n",
    answer: "d"
  },
  {
    question:
      "Vision is a…what? \n a)Alien \n b)Ghost\n c)Android \n d)Famious artist \n",
    answer: "c"
  },
  {
    question:
      " Who is the leader of S.H.I.E.L.D?? \n a)Nick Furry \n b)Tony Stark \n c)Bruce Banner \n d)Daian Prince \n",
    answer: "a"
  }
];

const play = (question, answer) => {
  const userAnswer = readlineSync.question(chalk.blue(question));
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(chalk.green("Right ✅"));
    score = score + 1;
  } else {
    console.log(chalk.red("Wrong ❌"));
    score = score - 1;
  }
  console.log(chalk.grey("The Current score  is : " + score));
  console.log(chalk.green("------------------------------------"));
};

for (var i = 0; i < questionsArray.length; i++) {
  play(questionsArray[i].question, questionsArray[i].answer);
}

console.log(chalk.green("The total score  is : " + score));
