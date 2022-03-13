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
// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C’s strstr() and Java’s indexOf().
//
// Constraints:
// 0 ≤ haystack.length, needle.length ≤ 5 × 104
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
