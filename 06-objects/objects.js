// The Recipe Card
// Never forget another recipe!
//
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

const myRecipe = {
  title: "Pav Bhaji",
  serves: 2,
  ingredients: ["bread", "vegies", "butter", "spices"]
};
console.log(`${myRecipe.title}
Serves: ${myRecipe.serves}
Ingredients: ${myRecipe.ingredients}`);

//
//
// The Reading List
// Keep track of which books you read and which books you want to read!
//
// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

const myBooks = [
  {name: "If it's not forever it's not a love",
   author: "Shreyas Rahane",
   read: true},

 {name: "Can love happen twice?",
  author: "Ajinkya Iyer",
  read: true},

{name: "The life",
 author: "Shree Sharma",
 read: false}
];

for( let i=0; i < myBooks.length; i++){
  const myBook = myBooks[i];

  if (myBook.read === true){
    console.log(`You already read ${myBook.name} by ${myBook.author} `);
  } else {
    console.log(`You haven't read ${myBook.name} by ${myBook.author} `);
  }
};









// # Geometry Function Lab
//
// ### Part 1, Rectangle
//
// Given the following a `rectangle` object like the one below, write the following functions which accept a `rectangle` object as an argument:
//
// * isSquare - Returns whether the rectangle is a square or not
// * area - Returns the area of the rectangle
// * perimeter - Returns the perimeter of the rectangle
//
// ```javascript


const rectangleA = {
  length: 4,
  width: 4
};

const isSquare = function (rectA) {
   if (rectA.length === rectA.width) {
     console.log("It's a square.");
   } else {
     console.log("It's not a square.");
   }
};
isSquare(rectangleA);

const area = function (rectA) {
  let areaOfRec = (rectA.length * rectA.width)
  console.log(`Area of the rectangle is ${areaOfRec}.`);
};
area(rectangleA);

const perimeter = function (rectA) {
  let periOfRec = 2 * (rectA.length + rectA.width)
  console.log(`Perimeter of the rectangle is ${periOfRec}.`);
};
perimeter(rectangleA);



// ### Part 2, Triangle
//
// Given the following a `triangle` object like the one below, write the following functions which accept a `triangle` object as an argument:
//
// * isEquilateral - Returns whether the triangle is equilateral or not
// * isIsosceles - Returns whether the triangle is isosceles or not
// * area - Returns the area of the Triangle
// * isObtuse - Returns whether the triangle is obtuse or not
//
// ```javascript
const triangleB = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const isEquilateral = function (triangleB) {
  if (triangleB.sideA === triangleB.sideB === triangleB.sideC) {
    console.log("It's an Equilateral Triangle.");
  } else {
    console.log("It's not an Equilateral Triangle.");
  }
};
isEquilateral(triangleB);

const isIsosceles = function (triangleB) {
  if (triangleB.sideA === triangleB.sideB !== triangleB.sideC || triangleB.sideA !== triangleB.sideB === triangleB.sideC || triangleB.sideA === triangleB.sideC != triangleB.sideB){
    console.log("It's an Isosceles Triangle.");
  } else {
    console.log("It's not an Isosceles Triangle.");
  }
};
isIsosceles(triangleB);

const areaT = function (triangleB) {
  var s = (triangleB.sideA + triangleB.sideB + triangleB.sideC)/2;
   const areaOftriangle = Math.sqrt(s*((s-triangleB.sideA)*(s-triangleB.sideB)*(s-triangleB.sideC)));
   console.log(`The area for a triangle is ${areaOftriangle}.`);
};
areaT(triangleB);

const isObtuse= function (){
  if ( (triangleB.sideA * triangleB.sideA) + (triangleB.sideB * triangleB.sideB) < (triangleB.sideC * triangleB.sideC) || (triangleB.sideA * triangleB.sideA) + (triangleB.sideC * triangleB.sideC) < (triangleB.sideB * triangleB.sideB) || (triangleB.sideC * triangleB.sideC) + (triangleB.sideB * triangleB.sideB) < (triangleB.sideA * triangleB.sideA)){
  console.log(`It is an abtuse triangle.`);
} else {
  console.log(`It is not an abtuse triangle.`);
}
};
isObtuse ();
