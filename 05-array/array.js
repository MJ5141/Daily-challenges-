// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.


let choices = ['red', 'orange', 'pink', 'yellow'];
for (let i = 0; i < choices.length; i++) {
    console.log('My #' + (i + 1) + ' choice is ' + choices[i]);
}

for (let i = 0; i < choices.length; i++) {
    let choiceNum = i + 1;
    let choiceNumSuffix;
    if (choiceNum == 1) {
        choiceNumSuffix = 'st';
    } else if (choiceNum == 2) {
        choiceNumSuffix = 'nd';
    } else if (choiceNum == 3) {
        choiceNumSuffix = 'rd';
    } else {
        choiceNumSuffix = 'th';
    }
    console.log('My ' + choiceNum + choiceNumSuffix + ' choice is ' + choices[i]);
}


// # Array and Functions Bonus Material
//
// 1. Define a function `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.


const maxOfTwoNumbers = function (num1, num2) {
  if (num1 < num2){
    console.log(`${num2} is greater than ${num1}`);
  } else {
      console.log(`${num1} is greater than ${num2}`);
  }
};
maxOfTwoNumbers(1,2);

// 2. Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them.

const maxOfThree = function (num1, num2, num3) {
  if (num1 < num2 && num3 < num2){
    console.log(`${num2} is greater than ${num1} & ${num3}`);
  } else if (num2 < num1 && num3 < num1){
      console.log(`${num1} is greater than ${num2} & ${num3}`);
  } else {
    console.log(`${num3} is greater than ${num1} & ${num2}`);
  }
};
maxOfThree(1,2,3);

// 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

const vowels = function (vow) {
  if (vow === "a" || vow === "e" || vow === "i" || vow === "o" || vow === "u") {
    console.log("I'm a vowel!");
  } else {
    console.log("I'm not a vowel!");
  }
};
vowels("k");
vowels("e");
vowels("i");
vowels("o");
vowels("u");

// 4. Define a function `sumArray` and a function `multiplyArray` that sums and multiplies (respectively) all the numbers in an array of numbers. For example, `sumArray([1,2,3,4])` should return 10, and `multiplyArray([1,2,3,4])` should return 24.

const sumArray = function (array){
  let sum = 0;
  for(let i=0; i< array.length; i++){
    sum= sum + array[i]
  }
  console.log(sum);
};
sumArray([1,2,3,4,5]);
sumArray([10,10,10,10,10]);


const multiplyArray = function (array){
  let total = 1;
  for(let i=0; i< array.length; i++){
    total= total * array[i]
  }
  console.log(total);
};
multiplyArray([1,2,3,4,5]);
multiplyArray([10,10,10,10,10]);

//
// ## Bonus
//
// 5. Define a function `reverseString` that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
// 6. Write a function `findLongestWord` that takes an array of words and returns the length of the longest one.
// 7. Write a function `filterLongWords` that takes an array of words and an number `i` and returns the array of words that are longer than i.
