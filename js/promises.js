"use strict";

// // Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
//
const wait = time => {
    return new Promise((resolve) => {
        // ========== my result ===============
        // setTimeout(() => {
        //     resolve();
        // },time);
    //    ========= Justin's result ============
        setTimeout(resolve,time);
    })
};
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
//
fetch('https://swapi.co/api/people/1').then(response => {
    return response.json();
}).then((data) => {
    // console.log(data);
});
//
// Promise.resolve("string1").then(string => {
//     // console.log(string);
//     return 'string2';
// }).then(string2 => {
//     // console.log(string2);
//     return 'string3';
// }).then(string3 => {
//     // console.log(string3);
// });
// // string1
// // string2
// // string3

function getUserNameFromGithub () {
    return fetch('https://api.github.com/users/JKempel13/events/public', {headers: {'Authorization': `token ${githubToken}`}})
        .then(response => response.json())
        .then(data => console.log(data[0].created_at))
}
getUserNameFromGithub();


// =================== Fetch Bonuses
// -- Ex. 1
// In your data directory, create a profiles.json file with the following...
// {
//     "sandy123": "brown",
//     "bob234": "green",
//     "sally345": "blue"
// }
// Add an input field and submit button (you will need to prevent the default behaviour) that when clicked, runs the following function...
// Create a function that takes in a username and fetch's the color preference based on the username and sets the background color to that color.



// function profileColor () {
//     return fetch('./data/profiles.json').then(response => {
//         return response.json();
//     }).then(data => console.log(data))
// }
// profileColor();



// -- Ex. 2
// Using the Star Wars API, log the first film a Star Wars character's homeworld appeared in

// fetch('https://swapi.co/api/people').then(response => {
//     return response.json();
// }).then(data => {
//     console.log(data.results);
//     for(let i = 0;i < data.results.length; i++){
//
//     }
// });

// -- Ex. 3
// Using the GitHub API and reduce(), find the average hour of the last 3 pushes. Ignore minutes.



// -- Ex. 4
// Create star-chars.json file in your data folder and paste in the following...
// [
//     {
//         "name": "Rey",
//         "coolness": 9
//     },
//     {
//         "name": "Luke Skywalker",
//         "coolness": 9
//     },
//     {
//         "name": "Darth Vadar",
//         "coolness": 10
//     }
// ]
// Create a function that fetches this array and returns an array of homeworlds for the characters.
//     It will look something like the following...
// ['Jakku', 'Tatooine', 'Tatooine']





