// Given an integer x, return true if x is palindrome integer.
//
// An integer is a palindrome when it reads the same backward as forward.
//
// For example, 121 is a palindrome while 123 is not.


 const isPalindrome = function (num){
   let reverseNum = parseFloat(num.toString().split('').reverse().join(''))
   if (num === reverseNum) {
     console.log(`${num} is a palindrome.`);
   } else {
      console.log(`${num} is not a palindrome.`);
   }
 };
 isPalindrome(121);
