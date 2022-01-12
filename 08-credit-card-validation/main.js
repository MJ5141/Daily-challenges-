// # Credit Card Validation
//
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// - Number must be 16 digits, all of them must be numbers
// - You must have at least two different digits represented (all of the digits cannot be the same)
// - The final digit must be even
// - The sum of all the digits must be greater than 16
//
// The following credit card numbers are valid:
//
// - `9999-9999-8888-0000`
// - `6666-6666-6666-1666`
//
// The following credit card numbers are invalid:
//
// - `a923-3211-9c01-1112` invalid characters
// - `4444-4444-4444-4444` only one type of number
// - `1111-1111-1111-1110` sum less than 16
// - `6666-6666-6666-6661` odd final number
//
// ## Example
// ```
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// ```
//
// *Hint*: Remove the dashed from the input string before checking if the input credit card number is valid.



const cardValidation = function (cardNum) {
  // removes - between the numbers:
  const cardNumber = cardNum.replace(/-/g, "");
  console.log(cardNumber);

  // sum of the numbers:
  let sum= 0
  for(let i=0; i<cardNumber.length; i++){
    sum= sum + parseFloat(cardNumber[i]);
  };

  function hasDiffNumbers(cardNumber) {
    let diffNumbers = false;
    // checks the first digit in the number array against the rest of them:
    for (let i = 1; i < cardNumber.length; i++) {
        if (cardNumber[0] !== cardNumber[i]) {
            diffNumbers = true;
        }
    }
    return diffNumbers;
}

  if (cardNumber.length !== 16){
    console.log("Invalid length");
  } else if (isNaN(cardNumber) === true){
    console.log("Invalid Characters");
  } else if (cardNumber % 2 !== 0){
    console.log("Invalid last digit");
  } else if (sum < 16){
    console.log("Invalid sum");
  } else if (!hasDiffNumbers(cardNumber)){
    console.log("Invalid numbers");
  }
  else {
    console.log("Valid card");
  }
};
cardValidation("1234-1234-1234-1238");
cardValidation("1111-1111-1111-1110");
cardValidation("4444-4444-4444-4444");
cardValidation("9999-9999-8888-0000");




































//
// *Bonus*: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// ```
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// ```
//
// *Double Bonus*: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
