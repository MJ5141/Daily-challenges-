// Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

function drEvil(amount) {
  if (amount == 1000000) {
    return amount + " dollars (pinky)";
  } else {
    return amount + " dollars";
  }
}
const message = drEvil(250);
console.log(message);

// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'

// function mixUp (str1, str2){
//   let string1 = str1.substring(0, 2);
//   let string2 = str2.substring(0, 2);
//   let st1 = str1.substr(2, str1.length);
//   let st2 = str2.substr(2, str2.length);
//   let word1 = string1.concat(st2);
//   let word2 = string2.concat(st1);
//   let result = word2.concat(" ", word1);
//   return (result);
// };
// const word = mixUp("mayuresh","tatya");
// console.log(word);

function mixUp(a, b) {
  return b.slice(0, 2) + a.slice(2) + " " + a.slice(0, 2) + b.slice(2);
}
const final = mixUp("your", "daddy");
console.log(final);

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

function fixStart(str){
  return str.charAt(0) + str.slice(1).replace(new RegExp(str.charAt(0), 'g'), '*');
};
const word = fixStart("bigboy");
console.log(word);

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

function verbing(amount){
  if (amount.endsWith("ing")) {
    return amount + "ly";
  }
  if (amount.length > 2){
    return amount + "ing";
  }
  if (amount.length <= 2){
    return amount;
  }
};
const verb = verbing("pain");
console.log(verb);
