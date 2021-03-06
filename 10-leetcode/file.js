// (1)
// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.


 const isPalindrome = function (num){
   let reverseNum = parseFloat(num.toString().split('').reverse().join(''))
   if (num === reverseNum) {
     // console.log(`${num} is a palindrome.`);
   } else {
      // console.log(`${num} is not a palindrome.`);
   }
 };
 isPalindrome(121);

 // (2)
 // Write a function to find the longest common prefix string amongst an array of strings.
 // If there is no common prefix, return an empty string "".

 var longestCommonPrefix = function (strs) {
    // Longest common prefix string
    let longestCommonPrefix = "";
    // Base condition
    if (strs == null || strs.length == 0) {
        return longestCommonPrefix;
    }
    // Find the minimum length string from the array
    let minimumLength = strs[0].length;
    for (let i = 1; i < strs.length; i++) {
        minimumLength = Math.min(minimumLength, strs[i].length);
    }
    // Loop for the minimum length
    for (let i = 0; i < minimumLength; i++) {
        // Get the current character from first string
        let current = strs[0][i];
        // Check if this character is found in all other strings or not
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] != current) {
                return longestCommonPrefix;
            }
        }
        longestCommonPrefix += current;
    }
    // console.log(longestCommonPrefix);
    return longestCommonPrefix;
};
 longestCommonPrefix(["amcn", "amber", "amcravati", "am", ]);




// (3)
//  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.



var isValid = function (s) {
    // Stack to store left symbols
    const leftSymbols = [];
    // Loop for each character of the string
    for (let i = 0; i < s.length; i++) {
        // If left symbol is encountered
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            leftSymbols.push(s[i]);
        }
        // If right symbol is encountered
        else if (s[i] === ')' && leftSymbols.length !== 0 && leftSymbols[leftSymbols.length - 1] === '(') {
            leftSymbols.pop();
            console.log("true");
        } else if (s[i] === '}' && leftSymbols.length !== 0 && leftSymbols[leftSymbols.length - 1] === '{') {
            leftSymbols.pop();
            console.log("true");
        } else if (s[i] === ']' && leftSymbols.length !== 0 && leftSymbols[leftSymbols.length - 1] === '[') {
            leftSymbols.pop();
            console.log("true");
        }
        // If none of the valid symbols is encountered
        else {
          console.log("False");
            return false;
        }
    }
    return leftSymbols.length === 0;
};
isValid(("(){}"));








// You are given the heads of two sorted linked lists list1 and list2.
//
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
//
// Return the head of the merged linked list.

var mergeTwoLists = function (l1, l2) {
    // Check if either of the lists is null
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }
    // Head of the new linked list - this is the head of the resultant list
    let head = null;
    // Reference of head which is null at this point
    let temp = head;
    // Choose head which is smaller of the two lists
    if (l1.val < l2.val) {
        temp = head = new ListNode(l1.val);
        l1 = l1.next;
    } else {
        temp = head = new ListNode(l2.val);
        l2 = l2.next;
    }
    // Loop until any of the list becomes null
    while (l1 && l2) {
        if (l1.val < l2.val) {
            temp.next = new ListNode(l1.val);
            l1 = l1.next;
            temp = temp.next;
        } else {
            temp.next = new ListNode(l2.val);
            l2 = l2.next;
            temp = temp.next;
        }
    }
    // Add all the nodes in l1, if remaining
    while (l1) {
        temp.next = new ListNode(l1.val);
        l1 = l1.next;
        temp = temp.next;
    }
    // Add all the nodes in l2, if remaining
    while (l2) {
        temp.next = new ListNode(l2.val);
        l2 = l2.next;
        temp = temp.next;
    }
    return head;
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
//
// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
//
// Return k after placing the final result in the first k slots of nums.
//
// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.



var removeDuplicates = function (nums) {
    // Length of the updated array
    let count = 0;
    // Loop for all the elements in the array
    for (let i = 0; i < nums.length; i++) {
        // If the current element is equal to the next element, we skip
        if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
            continue;
        }
        // We will update the array in place
        nums[count] = nums[i];
        count++;
    }
    return count;
};


// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed. Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements. Return k after placing the final result in the first k slots of nums. Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

var removeElement = function (nums, val) {
    // Counter for keeping track of elements other than val
    let count = 0;
    // Loop through all the elements of the array
    for (let i = 0; i < nums.length; i++) {
        // If the element is not val
        if (nums[i] !== val) {
            nums[count++] = nums[i];
        }
    }
    return count;
};



// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
//
// Clarification:
// What should we return when needle is an empty string? This is a great question to ask during an interview.
//
// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C???s strstr() and Java???s indexOf().
//
// Constraints:
// 0 ??? haystack.length, needle.length ??? 5 ?? 104
// haystack and needle consist of only lower-case English characters.



var strStr = function (haystack, needle) {
    // Base condition
    if (haystack == null || needle == null) {
        return -1;
    }
    // Special case
    if (haystack === needle) {
        return 0;
    }
    // length of the needle
    const needleLength = needle.length;
    // Loop through the haystack and slide the window
    for (let i = 0; i < haystack.length - needleLength + 1; i++) {
        // Check if the substring equals to the needle
        if (haystack.substring(i, i + needleLength) === needle) {
            return i;
        }
    }
    return -1;
};





// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.


var addTwoNumbers = function (l1, l2) {
    // Head of the new linked list - this is the head of the resultant list
    let head = null;
    // Reference of head which is null at this point
    let temp = null;
    // Carry
    let carry = 0;
    // Loop for the two lists
    while (l1 !== null || l2 !== null) {
        // At the start of each iteration, we should add carry from the last iteration
        let sum = carry;
        // Since the lengths of the lists may be unequal, we are checking if the
        // current node is null for one of the lists
        if (l1 != null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 != null) {
            sum += l2.val;
            l2 = l2.next;
        }
        // At this point, we will add the total sum % 10 to the new node
        // in the resultant list
        let node = new ListNode(Math.floor(sum) % 10);
        // Carry to be added in the next iteration
        carry = Math.floor(sum / 10);
        // If this is the first node or head
        if (temp == null) {
            temp = head = node;
        }
        // For any other node
        else {
            temp.next = node;
            temp = temp.next;
        }
    }
    // After the last iteration, we will check if there is carry left
    // If it's left then we will create a new node and add it
    if (carry > 0) {
        temp.next = new ListNode(carry);
    }
    return head;
};




// Given a string s, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring = function (s) {
    // Base condition
    if (!s) {
        return 0;
    }
    // Starting index of the window
    let start = 0;
    // Ending index of the window
    let end = 0;
    // Maximum length of the substring
    let maxLength = 0;
    // Set to store the unique characters
    const uniqueCharacters = new Set();
    // Loop for each character in the string
    while (end < s.length) {
        if (!uniqueCharacters.has(s[end])) {
            uniqueCharacters.add(s[end]);
            end++;
            maxLength = Math.max(maxLength, uniqueCharacters.size);
        } else {
            uniqueCharacters.delete(s[start]);
            start++;
        }
    }
    return maxLength;
};


// Given a string s, return the longest palindromic substring in s.


var longestPalindrome = function (s) {
    // Update the string to put hash "#" at the beginning, end and in between each character
    let updatedString = getUpdatedString(s);
    // Length of the array that will store the window of palindromic substring
    const length = 2 * s.length + 1;
    // Array to store the length of each palindrome centered at each element
    let p = new Array(length);
    p.fill(0);
    // Current center of the longest palindromic string
    let c = 0;
    // Right boundary of the longest palindromic string
    let r = 0;
    // Maximum length of the substring
    let maxLength = 0;
    // Position index
    let position = -1;
    for (let i = 0; i < length; i++) {
        // Mirror of the current index
        let mirror = 2 * c - i;
        // Check if the mirror is outside the left boundary of current longest palindrome
        if (i < r) {
            p[i] = Math.min(r - i, p[mirror]);
        }
        // Indices of the characters to be compared
        let a = i + (1 + p[i]);
        let b = i - (1 + p[i]);
        // Expand the window
        while (a < length && b >= 0 && updatedString[a] === updatedString[b]) {
            p[i]++;
            a++;
            b--;
        }
        // If the expanded palindrome is expanding beyond the right boundary of
        // the current longest palindrome, then update c and r
        if (i + p[i] > r) {
            c = i;
            r = i + p[i];
        }
        if (maxLength < p[i]) {
            maxLength = p[i];
            position = i;
        }
    }
    let offset = p[position];
    let result = "";
    for (let i = position - offset + 1; i <= position + offset - 1; i++) {
        if (updatedString[i] !== '#') {
            result += updatedString[i];
        }
    }
    return result;
};

function getUpdatedString(s) {
    let sb = "";
    for (let i = 0; i < s.length; i++) {
        sb += "#" + s[i];
    }
    sb += "#";
    return sb;
}


// Given a string s consisting of upper/lower-case alphabets and empty space characters ??? ???, return the length of the last word in the string. If the last word does not exist, return 0.


function lengthOfLastWord(a)
{
    let len = 0;

    // String a is 'final'-- can
    // not be modified So, create
    // a copy and trim the
    // spaces from both sides
    x = a.trim();

    for (let i = 0; i < x.length; i++) {
        if (x[i] == ' ') {
            len = 0;
        }
        else {
            len++;
        }
    }

    return len;
}



// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
//
// If target is not found in the array, return [-1, -1].
//
// You must write an algorithm with O(log n) runtime complexity.

var searchRange = function (nums, target) {
    return [findFirstOccurrence(nums, target), findLastOccurrence(nums, target)];
};

const findFirstOccurrence = (nums, target) => {
    // Left and right pointers
    let left = 0;
    let right = nums.length - 1;
    // Index of first occurrence
    let firstOccurrence = -1;
    // Loop until the two pointers meet
    while (left <= right) {
        // Middle index
        let middle = left + parseInt((right - left) / 2);
        // Check if we have found the value
        if (nums[middle] === target) {
            firstOccurrence = middle;
            right = middle - 1;
        }
        // If the target is less than the element
        // at the middle index
        else if (target < nums[middle]) {
            right = middle - 1;
        }
        // If the target is greater than the element
        // at the middle index
        else {
            left = middle + 1;
        }
    }
    return firstOccurrence;
};

const findLastOccurrence = (nums, target) => {
    // Left and right pointers
    let left = 0;
    let right = nums.length - 1;
    // Index of first occurrence
    let lastOccurrence = -1;
    // Loop until the two pointers meet
    while (left <= right) {
        // Middle index
        let middle = left + parseInt((right - left) / 2);
        // Check if we have found the value
        if (nums[middle] === target) {
            lastOccurrence = middle;
            left = middle + 1;
        }
        // If the target is less than the element
        // at the middle index
        else if (target < nums[middle]) {
            right = middle - 1;
        }
        // If the target is greater than the element
        // at the middle index
        else {
            left = middle + 1;
        }
    }
    return lastOccurrence;
};



// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)



var swapPairs = function (head) {
    // Dummy node
    const dummy = new ListNode(0);
    // Point the next of dummy node to the head
    dummy.next = head;
    // This node will be used to traverse the list
    let current = dummy;
    // Loop until we reach to the second last node
    while (current.next !== null && current.next !== undefined && current.next.next !== null) {
        // First node of the pair
        let first = current.next;
        // Second node of the pair
        let second = current.next.next;
        // Point the next of first node to the node after second node
        first.next = second.next;
        // Now the current node's next should be the second node
        current.next = second;
        // Linking the original second node to the first node
        current.next.next = first;
        // Move the pointer two nodes ahead
        current = current.next.next;
    }
    return dummy.next;
};



// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
//
// The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.
//
// Return the quotient after dividing dividend by divisor.
//
// Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [???231, 231 ??? 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.


var divide = function (dividend, divisor) {
    const MAX = 2147483647;
    const MIN = -2147483648;
    // Check for overflow
    if (divisor === 0 || (dividend === MIN && divisor === -1)) {
        return MAX;
    }
    if (divisor === dividend) {
        return 1;
    }
    // Sign of result
    const sign = (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0) ? -1 : 1;
    // Quotient
    let quotient = 0;
    // Take the absolute value
    let absoluteDividend = Math.abs(dividend);
    let absoluteDivisor = Math.abs(divisor);
    // Loop until the  dividend is greater than divisor
    while (absoluteDividend >= absoluteDivisor) {
        // This represents the number of bits shifted or
        // how many times we can double the number
        let shift = 0;
        let shiftedDivisor = absoluteDivisor;
        while (absoluteDividend >= shiftedDivisor) {
            shift++;
            shiftedDivisor = absoluteDivisor << shift;
            // To handle overflow using left shift operator in JS
            if (shiftedDivisor < 0) {
                break;
            }
        }
        // Add the number of times we shifted to the quotient
        quotient += (1 << (shift - 1));
        // Update the dividend for the next iteration
        absoluteDividend -= absoluteDivisor << (shift - 1);
    }
    return sign === -1 ? -quotient : quotient;
};





// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
//
// Constraints:
// 1 ??? n ??? 8




var generateParenthesis = function (n) {
    // Resultant list
    const result = [];
    // Recursively generate parentheses
    generate(result, "", 0, 0, n);
    return result;
};

function generate(result, s, open, close, n) {
    // Base condition
    if (open === n && close === n) {
        result.push(s);
        return;
    }
    // If the number of _open parentheses is less than the given n
    if (open < n) {
        generate(result, s + "(", open + 1, close, n);
    }
    // If we need more close parentheses to balance
    if (close < open) {
        generate(result, s + ")", open, close + 1, n);
    }
};


// # The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example
//
// ```
// // Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

let prices = Object.values(cartForParty);

let sum = 0
for(let i=0; i<prices.length; i++){
  sum= sum + parseFloat(prices[i]);
}
console.log(sum);



// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const squareNum = function (num){
  let squareof = num * num;
  console.log(`The result of squaring the number ${num} is ${squareof}.`);
  return squareof;
};
const square= squareNum(77);


const halfNum = function (num){
  let halfOf = num / 2;
  console.log(`Half of ${num} is ${halfOf}.`);
  return halfOf;
};
const half = halfNum(11);


const percentNum = function (num1, num2){
  let percentOf = (num1 * 100) / num2;
  console.log(`${num1} is ${percentOf}% of ${num2}.`);
  return percentOf;
};
const percent = percentNum(10,100);


const areaOfCircle = function (r){
  let areaOf = 3.14 * r * r;
  areaOf = areaOf.toFixed(2); //Round the result so there are only two digits after the decimal.
  console.log(`The area for a circle with radius ${r} is ${areaOf}.`);
  return areaOf;
};
const area = areaOfCircle(23.89);


const calculator = function (num){
  let halfOf = num / 2;
  console.log(halfOf);
  let squareof = halfOf * halfOf;
  console.log(squareof);
  let areaOf = 3.14 * squareof * squareof;
  console.log(areaOf);
  let percentOf = (areaOf * 100) / squareof;
  console.log(percentOf);
  return percentOf;
}
const result = calculator(10);




const isPalindrome = function (num){
  let reverseNum = parseFloat(num.toString().split('').reverse().join(''))
  if (num === reverseNum) {
    // console.log(`${num} is a palindrome.`);
  } else {
     // console.log(`${num} is not a palindrome.`);
  }
};
isPalindrome(121);

// (2)
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function (strs) {
   // Longest common prefix string
   let longestCommonPrefix = "";
   // Base condition
   if (strs == null || strs.length == 0) {
       return longestCommonPrefix;
   }
   // Find the minimum length string from the array
   let minimumLength = strs[0].length;
   for (let i = 1; i < strs.length; i++) {
       minimumLength = Math.min(minimumLength, strs[i].length);
   }
   // Loop for the minimum length
   for (let i = 0; i < minimumLength; i++) {
       // Get the current character from first string
       let current = strs[0][i];
       // Check if this character is found in all other strings or not
       for (let j = 0; j < strs.length; j++) {
           if (strs[j][i] != current) {
               return longestCommonPrefix;
           }
       }
       longestCommonPrefix += current;
   }
   // console.log(longestCommonPrefix);
   return longestCommonPrefix;
};
longestCommonPrefix(["amcn", "amber", "amcravati", "am", ]);




// (3)
//  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.



var isValid = function (s) {
   // Stack to store left symbols
   const leftSymbols = [];
   // Loop for each character of the string
   for (let i = 0; i < s.length; i++) {
       // If left symbol is encountered
       if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
           leftSymbols.push(s[i]);
       }
       // If right symbol is encountered
       else if (s[i] === ')' && leftSymbols.length !== 0 && leftSymbols[leftSymbols.length - 1] === '(') {
           leftSymbols.pop();
           console.log("true");
       } else if (s[i] === '}' && leftSymbols.length !== 0 && leftSymbols[leftSymbols.length - 1] === '{') {
           leftSymbols.pop();
           console.log("true");
       } else if (s[i] === ']' && leftSymbols.length !== 0 && leftSymbols[leftSymbols.length - 1] === '[') {
           leftSymbols.pop();
           console.log("true");
       }
       // If none of the valid symbols is encountered
       else {
         console.log("False");
           return false;
       }
   }
   return leftSymbols.length === 0;
};
isValid(("(){}"));


//  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.



var isValid = function (s) {
    // Stack to store left symbols
    const leftSymbols = [];
    // Loop for each character of the string
    for (let i = 0; i < s.length; i++) {
        // If left symbol is encountered
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            leftSymbols.push(s[i]);
        }
        // If right symbol is encountered
        else if (s[i] === ')' && leftSymbols.length !== 0 && leftSymbols[leftSymbols.length - 1] === '(') {
            leftSymbols.pop();
            console.log("true");
        } else if (s[i] === '}' && leftSymbols.length !== 0 && leftSymbols[leftSymbols.length - 1] === '{') {
            leftSymbols.pop();
            console.log("true");
        } else if (s[i] === ']' && leftSymbols.length !== 0 && leftSymbols[leftSymbols.length - 1] === '[') {
            leftSymbols.pop();
            console.log("true");
        }
        // If none of the valid symbols is encountered
        else {
          console.log("False");
            return false;
        }
    }
    return leftSymbols.length === 0;
};
isValid(("(){}"));



// # Leap Year Warmup Exercise
// ## Do this in HTML and JS!
// Write a function that will take any given year and return whether it is a leap year or not. Remember that a leap year is:
// Every year that is evenly divisible by 4
// Except if it is evenly divisible by 100...
// Unless it is also divisible by 400
// Test Data... Make sure it is working!
// - 1997 is not a leap year, it should return false
// - 1996 is a leap year, it should return true
// - 1900 is not a leap year, it should return false
// - 2000 is a leap year, it should return true
// How to structure it...
// - We want a custom function called isLeapYear
// Bonus!
// - Ask the user what number they want to test
// Watch a whole heap of information about leap years... http://www.youtube.com/watch?v=xX96xng7sAE


const isLeapYear = function (year){
  if (year % 400 === 0){
    console.log("It's a Leap year!");
  } else if (year % 100 === 0){
    console.log("It's a Leap year!");
  } else if (year % 4 === 0){
    console.log("It's a Leap year!");
  } else {
    console.log("It's not a Leap year!");
  }
};
isLeapYear(2004);
isLeapYear(1997);
isLeapYear(1996);
isLeapYear(1900);
isLeapYear(2000);



// There is an integer array nums sorted in ascending order (with distinct values).
//
// Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
//
// Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
//
// Constraints:
// 1 ??? nums.length ??? 5000
// -104 ??? nums[i] ??? 104
// All values of nums are unique.
// nums is guaranteed to be rotated at some pivot.
// -104 ??? target ??? 104.


var search = function (nums, target) {
    // Special case
    if (nums === null || nums.length === 0) {
        return -1;
    }
    // Left and right pointers in the array
    let left = 0;
    let right = nums.length - 1;
    // First step is to find the pivot where the
    // array is rotated
    while (left < right) {
        // Middle pointer
        let middle = left + parseInt((right - left) / 2);
        // If the element at the mid is greater than
        // the element at the right then we can say that
        // the array is rotated after middle index
        if (nums[middle] > nums[right]) {
            left = middle + 1;
        }
        // Else, the pivot is in the left part
        else {
            right = middle;
        }
    }
    // After the above loop is completed, then the
    // left index will point to the pivot
    const pivot = left;
    left = 0;
    right = nums.length - 1;
    // Now we will find in which half of the array,
    // our target is present
    if (target >= nums[pivot] && target <= nums[right]) {
        left = pivot;
    } else {
        right = pivot;
    }
    // Now perform normal binary search
    while (left <= right) {
        let middle = left + parseInt((right - left) / 2);
        if (nums[middle] === target) {
            return middle;
        } else if (target < nums[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1;
};



// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
//
// If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).
//
// The replacement must be in place and use only constant extra memory.
//
// Constraints:
// 1 ??? nums.length ??? 100
// 0 ??? nums[i] ??? 100

var nextPermutation = function(nums) {
    // Length of the array
    const n = nums.length;
    // Index of the first element that is smaller than
    // the element to its right.
    let index = -1;
    // Loop from right to left
    for (let i = n - 1; i > 0; i--) {
        if (nums[i] > nums[i - 1]) {
            index = i - 1;
            break;
        }
    }
    // Base condition
    if (index === -1) {
        reverse(nums, 0, n - 1);
        return nums;
    }
    let j = n - 1;
    // Again swap from right to left to find first element
    // that is greater than the above find element
    for (let i = n - 1; i >= index + 1; i--) {
        if (nums[i] > nums[index]) {
            j = i;
            break;
        }
    }
    // Swap the elements
    swap(nums, index, j);
    // Reverse the elements from index + 1 to the nums.length
    reverse(nums, index + 1, n - 1);
    return nums;
};

const reverse = (nums, i, j) => {
    while (i < j) {
        swap(nums, i, j);
        i++;
        j--;
    }
};

const swap = (nums, i, index) => {
    const temp = nums[index];
    nums[index] = nums[i];
    nums[i] = temp;
};

// Given an array nums and a value val, remove all instances of that value in-place and return the new length. Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
//
// The order of elements can be changed. It doesn???t matter what you leave beyond the new length.
//
// Clarification:
//
// Confused why the returned value is an integer but your answer is an array?
//
// Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.
//
// Internally you can think of this:
//
// // nums is passed in by reference. (i.e., without making a copy)
// int len = removeElement(nums, val);
//
// // any modification to nums in your function would be known by the caller.
// // using the length returned by your function, it prints the first len elements.
// for (int i = 0; i < len; i++) {
//     print(nums[i]);
// }
// Constraints:
// 0 ??? nums.length ??? 100
// 0 ??? nums[i] ??? 50
// 0 ??? val ??? 100


var removeElement = function (nums, val) {
    // Counter for keeping track of elements other than val
    let count = 0;
    // Loop through all the elements of the array
    for (let i = 0; i < nums.length; i++) {
        // If the element is not val
        if (nums[i] !== val) {
            nums[count++] = nums[i];
        }
    }
    return count;
};

// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const squareNum = function (num){
  let squareof = num * num;
  console.log(`The result of squaring the number ${num} is ${squareof}.`);
  return squareof;
};
const square= squareNum(77);


const halfNum = function (num){
  let halfOf = num / 2;
  console.log(`Half of ${num} is ${halfOf}.`);
  return halfOf;
};
const half = halfNum(11);


const percentNum = function (num1, num2){
  let percentOf = (num1 * 100) / num2;
  console.log(`${num1} is ${percentOf}% of ${num2}.`);
  return percentOf;
};
const percent = percentNum(10,100);


const areaOfCircle = function (r){
  let areaOf = 3.14 * r * r;
  areaOf = areaOf.toFixed(2); //Round the result so there are only two digits after the decimal.
  console.log(`The area for a circle with radius ${r} is ${areaOf}.`);
  return areaOf;
};
const area = areaOfCircle(23.89);


const calculator = function (num){
  let halfOf = num / 2;
  console.log(halfOf);
  let squareof = halfOf * halfOf;
  console.log(squareof);
  let areaOf = 3.14 * squareof * squareof;
  console.log(areaOf);
  let percentOf = (areaOf * 100) / squareof;
  console.log(percentOf);
  return percentOf;
}
const result = calculator(10);


// Given a string s, return the longest palindromic substring in s.


var longestPalindrome = function (s) {
    // Update the string to put hash "#" at the beginning, end and in between each character
    let updatedString = getUpdatedString(s);
    // Length of the array that will store the window of palindromic substring
    const length = 2 * s.length + 1;
    // Array to store the length of each palindrome centered at each element
    let p = new Array(length);
    p.fill(0);
    // Current center of the longest palindromic string
    let c = 0;
    // Right boundary of the longest palindromic string
    let r = 0;
    // Maximum length of the substring
    let maxLength = 0;
    // Position index
    let position = -1;
    for (let i = 0; i < length; i++) {
        // Mirror of the current index
        let mirror = 2 * c - i;
        // Check if the mirror is outside the left boundary of current longest palindrome
        if (i < r) {
            p[i] = Math.min(r - i, p[mirror]);
        }
        // Indices of the characters to be compared
        let a = i + (1 + p[i]);
        let b = i - (1 + p[i]);
        // Expand the window
        while (a < length && b >= 0 && updatedString[a] === updatedString[b]) {
            p[i]++;
            a++;
            b--;
        }
        // If the expanded palindrome is expanding beyond the right boundary of
        // the current longest palindrome, then update c and r
        if (i + p[i] > r) {
            c = i;
            r = i + p[i];
        }
        if (maxLength < p[i]) {
            maxLength = p[i];
            position = i;
        }
    }
    let offset = p[position];
    let result = "";
    for (let i = position - offset + 1; i <= position + offset - 1; i++) {
        if (updatedString[i] !== '#') {
            result += updatedString[i];
        }
    }
    return result;
};

function getUpdatedString(s) {
    let sb = "";
    for (let i = 0; i < s.length; i++) {
        sb += "#" + s[i];
    }
    sb += "#";
    return sb;
}



// Write a function to find the longest common prefix string amongst an array of strings.
//
// If there is no common prefix, return an empty string "".
//
// Constraints
// 0 ??? strs.length ??? 200
// 0 ??? strs[i].length ??? 200
// strs[i] consists of only lower-case English letters.



var longestCommonPrefix = function (strs) {
    // Longest common prefix string
    let longestCommonPrefix = "";
    // Base condition
    if (strs == null || strs.length == 0) {
        return longestCommonPrefix;
    }
    // Find the minimum length string from the array
    let minimumLength = strs[0].length;
    for (let i = 1; i < strs.length; i++) {
        minimumLength = Math.min(minimumLength, strs[i].length);
    }
    // Loop for the minimum length
    for (let i = 0; i < minimumLength; i++) {
        // Get the current character from first string
        let current = strs[0][i];
        // Check if this character is found in all other strings or not
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] != current) {
                return longestCommonPrefix;
            }
        }
        longestCommonPrefix += current;
    }
    return longestCommonPrefix;
};



// 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
//
// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV, because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
//
// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a Roman numeral, convert it to an integer.
//
// Constraints
// 1 ??? s.length ??? 15
// s contains only the characters (I, V, X, L, C, D, M).
// It is guaranteed that s is a valid Roman numeral in the range [1, 3999].

var romanToInt = function (s) {
    // Map to store romans numerals
    const romanMap = new Map();
    // Fill the map
    romanMap.set('I', 1);
    romanMap.set('V', 5);
    romanMap.set('X', 10);
    romanMap.set('L', 50);
    romanMap.set('C', 100);
    romanMap.set('D', 500);
    romanMap.set('M', 1000);
    // Length of the given string
    const n = s.length;
    // Variable to store result
    let num = romanMap.get(s[n - 1]);
    // Loop for each character from right to left
    for (let i = n - 2; i >= 0; i--) {
        // Check if the character at right of current character is
        // bigger or smaller
        if (romanMap.get(s[i]) >= romanMap.get(s[i + 1])) {
            num += romanMap.get(s[i]);
        } else {
            num -= romanMap.get(s[i]);
        }
    }
    return num;
};
