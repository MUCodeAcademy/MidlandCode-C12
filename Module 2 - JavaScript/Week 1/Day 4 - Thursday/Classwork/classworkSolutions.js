//! Write the following functions:

// -----------------------------------------------------------------
//! Pass a number into a function that will return the absolute value of that number
//! (absolute value of -1 is 1 and abs of 1 is 1) without the use of built in math functions.
function absValue(num) {
    if (num >= 0) {
      return num;
    }
    return num * -1;
  }
  
  // console.log(absValue(-4));
  // console.log(absValue(0));
  // console.log(absValue(16));
  
  // -----------------------------------------------------------------
  //! Make a function called pow that accepts arguments x and y and returns the value of x to the y power
  
  // Think of how exponents work: 
  // 2^4 is just 2*2*2*2 -> can put this in a loop
  
  // x = base; 2
  // y = exponent; 4
  function pow(x, y) {
    let temp = 1;
    for (let i = 1; i <= y; i++) {
      temp = temp * x;
    }
    return temp;
  }

  // console.log(pow(2, 4)); // 16
  // console.log(pow(3, 2)); // 9
  // console.log(pow(4, 3)); // 64
  // console.log(pow(5, 0)); // 1
  
  // -----------------------------------------------------------------
  //! Write a function that checks to see if the word as an argument is a palindrome (case insensitive)
  //! and log the result to the console.

  // Think about how you can reverse a word to see if it's a palindrome using these methods:

  // .split method splits a string into an array of substrings
  // .split takes an optional argument for a separator. if (" ") is used, the string is split between words.
  // if no argument is given, it returns an array with the original string.

  // examples: text = "How are you doing today?"
  //          const myArray = text.split("") -> "H,o,w, ,a,r,e, ,y,o,u, ,d,o,i,n,g, ,t,o,d,a,y,?"
  //          const myArray = text.split(" ") -> "How are you doing today?"
  //          const myArray = text.split() -> "How are you doing today?"
  //          const myArray = text.split("o") -> "H,w are y,u d,ing t,day?"

  // .reverse method reverses the elements in an array (remember, .split returns an array)

  // example: array = ["h", "e", "l", "l", "o"]
  //          arrayReverse = array.reverse(); -> ["o", "l", "l", "e", "h"]

  // .join joins an array and returns it a string
  // .join takes an argument for a separator. If no argument is specified, a comma is used.

  // examples: array = ["h", "e", "l", "l", "o"]
  //          arrayJoin = array.join(); -> "h,e,l,l,o";
  //          arrayJoin = array.join(""); -> "hello";
  
  const isPalindrome = (word) => {
    const reversedWord = word.split("").reverse().join("");
    if (reversedWord.toLowerCase() === word.toLowerCase()) {
      console.log("It is a palindrome");
    } else {
      console.log("It is not a palindrome");
    }
  };
  
  isPalindrome("racecar");
  isPalindrome("rAcEcaR");
  isPalindrome("Pineapple");
  
  // -----------------------------------------------------------------
  //! Write a function that accepts an array of banned words and an array of words.
  //! If any of the banned words appear in the array of words (case sensitive),
  //! replace them with "REDACTED", do this without any prototypical methods.
  
  let words = ["apple", "orange", "lemon", "pear", "orange"];
  let bannedWords = ["orange", "banana", "lime", "Apple"];
  
  function censorWords(toCensor, banned) {
    //   toCensor = [...toCensor];
    for (let i = 0; i < toCensor.length; i++) {
      for (let j = 0; j < banned.length; j++) {
        if (toCensor[i] === banned[j]) {
          toCensor[i] = "REDACTED";
        }
      }
    }
    return toCensor;
  }
  
  console.log(censorWords(words, bannedWords));
  
  // -----------------------------------------------------------------
  //! Write a function that accepts two arguments (names can be changed):a and b.
  //! Cycle through all numbers between a and b (inclusive) and
  //!  - if the number is divisible by 2 log "Fizz" if the number is divisible by 3 log "Buzz"
  //!  - if it is divisible by both log "FizzBuzz" otherwise log the number.
  //!  - if a==b log nothing,
  //! if b < a count down otherwise count up
  function fizzBuzz(a, b) {
    if (b < a) {
      for (let i = a; i >= b; i--) {
        fbLogger(i);
      }
    } else if (b > a) {
      for (let i = a; i <= b; i++) {
        fbLogger(i);
      }
    }
  }
  
  function fbLogger(num) {
    if (num % 3 === 0 && num % 2 === 0) {
      console.log("FizzBuzz");
    } else if (num % 2 === 0) {
      console.log("Fizz");
    } else if (num % 3 === 0) {
      console.log("Buzz");
    } else {
      console.log(num);
    }
  }
  
  // fizzBuzz(30, 60);
  // fizzBuzz(80, 42);
  
  // -----------------------------------------------------------------
  //! Write a function that takes a day, month, and year (in whatever format you choose)
  //! and return what day that was.

  // function getDayOfWeek(day, month, year) {
  //   const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  //   const date = new Date(`${month}/${day}/${year}`);
  //   const dayOfWeek = daysOfWeek[date.getDay()];
  //   return dayOfWeek;
  // }

  // console.log(getDayOfWeek(6, 3, 2023)); // Output: Monday


  // Using Zeller's Congruence Formula
  function getDayOfWeek(day, month, year) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const q = day;
    const m = (month + 9) % 12; 
    // Formula assumes March is the first month of the year, so we need to adjust
    // When month is 1 (January), m is 10 (which corresponds to the previous December); 
    // When month is 2 (February), m is 11 (which also corresponds to the previous December). 
    // For all other months, m is equal to month minus 2.
    const Y = month < 3 ? year - 1 : year; // Formula assumes Jan and Feb are 13th/14th months of previous year
    const K = Y % 100; // Gets the last two digits of the year (ex. 2023 % 100 = 23)
    const J = Math.floor(Y / 100); // Gets the century (ex. 2023 / 100 = 20)
    const h = (q + Math.floor(13*(m+1)/5) + K + Math.floor(K/4) + Math.floor(J/4) + 5*J) % 7; // Zeller's congruence formula
    const dayOfWeek = daysOfWeek[h]; // Uses the number from the formula to get day of week (ex. 0 = Sunday, 1 = Monday, etc.)
    return dayOfWeek;
  }

  console.log(getDayOfWeek(6, 3, 2023)); // Output: Monday
  
  // -----------------------------------------------------------------
  //! Write a function to see if a pizza can be split evenly amongst a group of people.
  //! The function should take two arguments: the number of people present, and the number of slices of the pizza.
  //!   - If it can be split evenly log the result
  //!   - If it cannot, say it cannot be split evenly and ALSO list how many people will go without an extra slice.
  
  function isPizzaDivisible(numPeople, numSlices) {
    let extra = numSlices % numPeople; // extra = 5 % 13 = 3
    if (extra !== 0) {
      console.log(
        `Pizza is NOT evenly split, ${
          numPeople - extra // 5 - 3
        } people go without an extra slice`
      );
    } else {
      console.log("Pizza is evenly split!");
    }
  }
  
  isPizzaDivisible(7, 14); // Is even
  isPizzaDivisible(5, 13); // Not even, 2 people go without an extra slice
  isPizzaDivisible(6, 5); // Not even, 1 person goes without an extra slice
  
  // -----------------------------------------------------------------
  //! Write a function to see if a triangle is a right triangle based off
  //! whether or not square of the longest side is equal to the sum of the squares of the other sides.

  function isRightTriangle(side1, side2, side3) {
    const sides = [side1, side2, side3].sort((a, b) => a - b);          // .sort uses an optional comparison function
    const longestSide = sides[2];                                       // If a < b, returns a negative number, a gets sorted before b
    const sumOfSquares = Math.pow(sides[0], 2) + Math.pow(sides[1], 2); // If b > a, returns positive number, b gets sorted before a
    const squareOfLongest = Math.pow(longestSide, 2);                   // If equal, the order is not changed
    return squareOfLongest === sumOfSquares;
}                                                                           
                                                               
console.log(isRightTriangle(3, 4, 5)); // Output: true
console.log(isRightTriangle(4, 5, 6)); // Output: false

  
  // -----------------------------------------------------------------
  //! Write a function to check to see if a warrior can beat all of the monsters in a dungeon.
  //! Supply the function with the amount of damage each of the monsters do (in array format) and
  //! then the number of health the warrior has.
  //!   - If the warrior doesn't have enough health to take all of the attacks they are unable to survive
  //!   - If they are able to take all of the attacks, they are able to survive.
  
  //? Example of monster damage:
  //? [1, 3, 2, 8, 5];
  //? Warrior health:
  //? 10;
  //? Since 1+3+2+8+5 = 19 and 10-19 < 0 they could not survive
  
  function dungeon(damage, warriorHP) {
    let totalDmg = 0;
    for (let i = 0; i < damage.length; i++) {
      totalDmg = totalDmg + damage[i];
    }
    if (totalDmg >= warriorHP) {
      console.log("Your warrior has perished");
    } else {
      console.log("You survived!");
    }
  }
  
  dungeon([1, 2, 3, 4], 10);
  dungeon([5, 23, 7], 47);
  dungeon([8, 2], 4);
  
  // -----------------------------------------------------------------
  //! BONUS:
  //! Use recursion for function 2
  
  //! EXTRA BONUS:
  // -----------------------------------------------------------------
  //! Write a function that contains a function scope variable named counter with a starting value of 0.
  //! - The function should return a closure that when called will increment the counter variable by 1
  //!   and log it to the console.
  //! - Assign the function to a variable named counterLog to be able to test it.
  