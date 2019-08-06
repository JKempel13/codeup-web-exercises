"use strict";

console.log("Hello from external JavaScript");

alert('Welcome to my Website!');

var userFavoriteColor = prompt('What is your favorite color?');

alert ("Great! " + userFavoriteColor + " is also my favorite color!!");
//=====================================//

var dailyRentalRateDollars = 3;
var littleMermaidDaysRented = prompt("How many days will Little Mermaid be rented?");
var brotherBearDaysRented = prompt("How many days will Brother Bear be rented?");
var herculesDaysRented = prompt("How many days will Hercule be rented?");
var totalRentalCost = (Number(littleMermaidDaysRented) + Number(brotherBearDaysRented) + Number(herculesDaysRented)) * dailyRentalRateDollars;

alert("You will owe $ " + totalRentalCost);

totalRentalCost = (littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented) * dailyRentalRateDollars;
//=====================================//

var googleHourlyRateDollars = 400;
var amazonHourlyRateDollars = 380;
var facebookHourlyRateDollars = 350;
var googleHours = prompt("How many hours did you work for Google this week?");
var amazonHours = prompt("How many hours did you work for Amazon this week?");
var facebookHours = prompt("How many hours did you work for Facebook this week?");
var totalPayment = (Number(googleHours)*googleHourlyRateDollars + Number(amazonHours)*amazonHourlyRateDollars + Number(facebookHours)*facebookHourlyRateDollars);

alert("You will get paid $" + totalPayment);

totalPayment = googleHours * googleHourlyRateDollars;
totalPayment += amazonHours * amazonHourlyRateDollars;
totalPayment += facebookHours * facebookHourlyRateDollars;
//=========================================//

var classIsNotFull = confirm("Is this class full?"); // boolean
console.log (classIsNotFull);

var classScheduleDoesNotConflict = confirm("Does this class conflict with your current schedule?"); // boolean
console.log (classScheduleDoesNotConflict);

var studentEnrolled = classIsNotFull && classScheduleDoesNotConflict;

studentEnrolled = alert("Congrats! You can now enroll in this class.");
//======================================//

var numberOfItems = confirm ("Do you have at least 2 items?"); // number
console.log (numberOfItems);
var offerIsValid = confirm ("Is the offer still valid?"); // boolean
console.log (offerIsValid);
var isPremiumMember = confirm ("Are you a Premium Member?"); // boolean
console.log (isPremiumMember);
var productDiscountApplied = offerIsValid && (isPremiumMember || numberOfItems > 2);

productDiscountApplied = alert ("Discount has been applied!");

