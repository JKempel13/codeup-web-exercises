 "use strict";
/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello (name) {
    return "Hello, " + name + "!";
}

// console.log(sayHello("Jason Kempel"));


/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

// sayHello("Jason Kempel");
var helloMessage = sayHello("Jason Kempel");

// console.log(helloMessage);


/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

var myName = "Jason Kempel";
sayHello(myName);

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

// function isTwo (num) {
//     return num === 2;
// }
const isTwo = num => num === 2;

console.log(isTwo(random), random);

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

// function calculateTip (tipPercentage, billTotal) {
//     return tipPercentage * billTotal;
// }

     //arrow function
const calculateTip = (tipPercentage, billTotal) => tipPercentage * billTotal;

console.log (calculateTip(.10, 150)); //15

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
//
let billTotal = Number(prompt("Bill Total?"));
let tipPercentage = Number(prompt("What percentage would you like to tip?"));
//
// function formatNumtoCurrency (num) {
//     return "$" + num.toFixed(2);
// }

const formatNumToCurrency = num => "$" + num.toFixed(2);

alert("Suggested tip: " + formatNumToCurrency(calculateTip(tipPercentage, billTotal)));

// console.log(typeof billTotal);

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */


// function applyDiscount (originalPrice,discountPercent) {
//     return originalPrice - (originalPrice * (discountPercent / 100));
// }

const applyDiscount = (originalPrice, discountPercent) => originalPrice - (originalPrice * (discountPercent / 100));


console.log (applyDiscount(100, 20));

