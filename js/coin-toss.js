// Determine coin toss (First ask user to choose Heads or Tails)
// Flip a coin
// If the oiutcome matches the user's choice, 
//     Tell the user that they won!
//     otherwise,
//         Tell the user that they lost

"use strict";
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
let coinToss = (userChoice) => {
// coin toss logic goes here
let outcome = "t";
  if (Math.random() > 0.5) {
    outcome = "h"
  }
// userChoice logic goes here
  if (outcome == userChoice) {
    console.log("You won the toss!");
  } else {
    console.log("You lost the toss.");
  }
}
let message = "Type h for heads or t for tails, the press Enter\n";
rl.question(message, (answer) => {
  coinToss(answer);
  rl.close();
});
