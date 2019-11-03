"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

//
var selectedNumber = confirm("Would you like to enter a number?");


if (selectedNumber) {

    var userNumberInput = prompt("What number would you like to enter?");

    var isNum = !isNaN(userNumberInput);

    if (isNum) {

        var userNum = parseFloat(userNumberInput);

        var isEven = userNumberInput % 2 === 0;

        var isEvenMessage = (isEven) ? "That number is even" : "That number is odd";
        alert(isEvenMessage);

        alert(+userNumberInput + +100);

        var isPos = Math.sign(userNumberInput) === 1;
        var isPosMessage = (isPos) ? "Number is positive" : "Number is negative";
        alert(isPosMessage);

    } else {
        alert("That is not a number!")
    }
}
//
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
//
// var userColorName = prompt("what is your favorite color?");
//
// function analyzeColor(color) {
//     if (color === 'blue') {
//         alert('blue is the color of the sky');
//     } else if (color === 'red') {
//         alert('Strawberries are red');
//     } else if (color === 'cyan') {
//         alert("I don't know anything about cyan");
//     } else {
//         alert("That is not a color I know");
//     }
// }
//
// console.log(analyzeColor(userColorName));





// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];



/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
// console.log(userColorName(randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
// var userColorName = prompt("what is your favorite color?");
//
// function analyzeColor(color) {
//     switch (userColorName) {
//         case "blue":
//             alert('blue is the color of the sky');
//             break;
//         case "red":
//             alert('Strawberries are red');
//             break;
//         case "cyan":
//             alert("I don't know anything about cyan");
//             break;
//         default:
//             alert("That is not a color I know");
//     }
// }
// console.log(analyzeColor('blue'));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// var whatColorDoYouWant = prompt("What color do you want?");
//
// function analyzeColor (color) {
//     return (alert("You chose" + " " + whatColorDoYouWant));
// }
//
// console.log(analyzeColor(whatColorDoYouWant));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
//
// var luckyNumber = Math.floor(Math.random() * 6);
//
// function calculateTotal(luckyNumber, totalAmount) {
//     var percentOff;
//
//     if (luckyNumber === 0) {
//         percentOff = 0;
//     } else if (luckyNumber === 1) {
//         percentOff = .10;
//     } else if (luckyNumber === 2) {
//         percentOff = .25;
//     } else if (luckyNumber === 3) {
//         percentOff = .35;
//     } else if (luckyNumber === 4) {
//         percentOff = .50;
//     } else {
//         percentOff = 1;
//     }
//
//     return totalAmount - (percentOff * totalAmount);
// }


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */

// var luckyNumber = Math.floor(Math.random() * 6);
// var totalAmount = prompt("What is the amount of your bill?");
//
// alert("Your lucky number is: " + luckyNumber);
// alert("Your price before the discount was: " + totalAmount);
// alert("Your price after the discount is: " + calculateTotal(luckyNumber,totalAmount));
//
// calculateTotal(luckyNumber,totalAmount);

// Generate a random number between 0 and 6
