"use strict";

// console.log("Hello from external JavaScript");
//
// alert('Welcome to my Website!');
//
// var userFavoriteColor = prompt('What is your favorite color?');
//
// alert ("Great, " + userFavoriteColor + " is also my favorite color!!");
//=====================================//

// var dailyRentalRateDollars = 3;
// var littleMermaidDaysRented = prompt("How many days was Little Mermaid rented?");
// var brotherBearDaysRented = prompt("How many days was Brother Bear rented?");
// var herculesDaysRented = prompt("How many days was Hercule rented?");
// var totalRentalCost = (Number(littleMermaidDaysRented) + Number(brotherBearDaysRented) + Number(herculesDaysRented)) * dailyRentalRateDollars;
//
// alert("You owe Blockbuster $ " + totalRentalCost.toFixed(2));
//
// totalRentalCost = (littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented) * dailyRentalRateDollars;
//=====================================//

// var googleHourlyRateDollars = Number(prompt("What is your Google hourly wage rate?"));
// var amazonHourlyRateDollars = Number(prompt("What is your Amazon hourly wage rate?"));
// var facebookHourlyRateDollars = Number(prompt("What is your Facebook hourly wage rate?"));
// var googleHours = Number(prompt("How many hours did you work for Google this week?"));
// var amazonHours = Number(prompt("How many hours did you work for Amazon this week?"));
// var facebookHours = Number(prompt("How many hours did you work for Facebook this week?"))
// var totalPayment = (Number(googleHours)*googleHourlyRateDollars + Number(amazonHours)*amazonHourlyRateDollars + Number(facebookHours)*facebookHourlyRateDollars);
//
// alert("You will get paid $" + totalPayment.toFixed(2));
//
// totalPayment = googleHours * googleHourlyRateDollars;
// totalPayment += amazonHours * amazonHourlyRateDollars;
// totalPayment += facebookHours * facebookHourlyRateDollars;
//=========================================//

var classIsNotFull = confirm("Is this class full?"); // boolean


var classScheduleDoesNotConflict = confirm("Does this class conflict with your current schedule?"); // boolean


var studentEnrolled = classIsNotFull && classScheduleDoesNotConflict;

alert("Student Enrolled: " + studentEnrolled);
//======================================//

var numberOfItems = confirm ("Do you have at least 2 items?"); // number
var offerIsValid = confirm ("Is the offer still valid?"); // boolean
var isPremiumMember = confirm ("Are you a Premium Member?"); // boolean
var productDiscountApplied = offerIsValid && (isPremiumMember || numberOfItems > 2);

alert ("Discount applied: " + productDiscountApplied);

