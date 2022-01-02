// Exercises: if/else statements
// What number's bigger?
// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

const greaterNum = function (num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is grater then ${num2}`);
  }
  else {
    console.log(`${num2} is grater then ${num1}`);
  }
};
greaterNum(10,15);
greaterNum(10000000000000,15);

//
//
// The World Translator
// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

const helloWorld = function (lang) {
  // if (lang === "en") {
  //   console.log("Hello, How are ya doin?");
  // }
  if (lang === "hn") {
    console.log("Namaste, Kaise ho?");
  }
  else if (lang === "ma") {
    console.log("Namaskar, Kase ahat?");
  }
  else {
    console.log("Hello, How are ya doin?");
  }
};
helloWorld("en");
helloWorld("hn");
helloWorld("ma");
helloWorld("po");


//
//
// The Grade Assigner
// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

const assignGrade = function (num) {
  if (num <= 40){
    console.log("Fail");
  } else if (num <= 60){
    console.log("D");
  } else if (num <= 70){
    console.log("C");
  } else if (num <= 80){
    console.log("B");
  } else {
    console.log("A");
  }
};
assignGrade(35);
assignGrade(55);
assignGrade(65);
assignGrade(75);
assignGrade(85);


// The Pluralizer
// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".
//
//
const pluralize = function (noun, number){
  if (number === 1){
    console.log(`${number} ${noun}`);
  } else {
    console.log(`${number} ${noun}s`);
  }
}
pluralize("cat", 8);
pluralize("cat", 1);
