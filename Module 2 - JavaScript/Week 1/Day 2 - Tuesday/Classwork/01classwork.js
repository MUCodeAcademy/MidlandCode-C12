//! LOOP PRACTICE

// -----------------------------------------------------------------

//! Take an input from the user. Starting with the 4th character,
//! log all characters until the end of the input.
//! If the input is shorter than 4 characters, nothing should be logged.

// let userInput = prompt("Enter a string");

// for (let i = 3; i < userInput.length; i++) {
//   console.log(userInput[i]); 
// }

// -----------------------------------------------------------------

//! Pick a random number. Prompt the user to guess a number.
//! If the number is correct, end the loop and tell the user how many tries it took to guess.
//! If it is incorrect, continue the loop.
//! (Test functionality by logging the number that was randomly generated in the prompt).

// To get a random number: Math.floor(Math.random() * max) + 1;
// Math.random generates a random number between 0 (inclusive) and 1 (exclusive).
// We multiply that number by the max value you want.
// Math.floor always rounds the number down.
// If max = 10, it should generate a random number from 1 to 10.

// let max = 10;
// let userGuess;
// let numGuesses = 0;
// let randomNum = Math.floor(Math.random() * max) + 1;

// while (randomNum !== userGuess) {
//     userGuess = parseInt(prompt(`${randomNum} Guess a random number between 1 - 10`));
//     numGuesses++;
// }

// -----------------------------------------------------------------

//! Using nested for loops, create and log the following pattern:
/*

*
**
***
****
*****

*/

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    // console.log(row);
}

// -----------------------------------------------------------------

//! Simulate a coin flip. Start a counter at 0. If the initial flip was heads,
//! leave the counter at 0 and log: "It took 0 retries to get heads!".
//! If the coin was tails, try again and keep doing so until heads happens. Log the amount of retries it took.

let counter = -1;
let coin;

// 0 is heads and 1 is tails

// Put this in a loop
coin = Math.floor(Math.random() * 2);
// This will generate a number between 0 and 1;
// The highest number Math.random() can generate is .99,
// So, if it generates .99, we multiply it by 2 to get 1.98, which gets rounded down to 1 by Math.floor()

// COMPARISON PRACTICE
// -----------------------------------------------------------------

//! Build a simple site that prompts a user for their first name and then a number
//! between one and one-hundred (inclusive).
//!  - Tell them whether their number is odd or even and if its greater than,
//!    less than, or equal to 50 and then log those messages separately to the console.
//!  - Log every number before theirs and every number from 100 counting down to theirs in two separate loops.
//!  - If their name is your name send an alert saying that it is a great name.

// Use toLowerCase() method to make their name entirely lower case.

// -----------------------------------------------------------------

//! Take the following arrays: `[-1,-2,2,10,7,8]` and `[4,-2,2,7,9,5]`
//! and see how many items the two arrays share in common.
//! Do this without prototypical methods (don't use array.filter and array.includes).
//! You will need a nested loop.

