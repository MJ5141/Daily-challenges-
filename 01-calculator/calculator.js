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
