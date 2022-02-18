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
    console.log(longestCommonPrefix);
    return longestCommonPrefix;
};
 longestCommonPrefix(["amcn", "amber", "amcravati", "am", ]);
