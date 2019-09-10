"use strict";

// // Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
//
// const wait = time => {
//     return new Promise((resolve) => {
//         // ========== my result ===============
//         setTimeout(() => {
//             resolve();
//         },time);
//     //    ========= Justin's result ============
//     //     setTimeout(resolve,time);
//     })
// };
// // wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// // wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
//
// fetch('https://swapi.co/api/people/1').then(response => {
//     return response.json();
// }).then((data) => {
//     // console.log(data);
// });
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
    return fetch('https://api.github.com/users/JKempel13/events/public', {headers: {'Authorization': `token ${githubToken}`}}).then(response => {
        return response.json();
    }).then(data => {
        console.log(data[0].created_at);
    })
}
getUserNameFromGithub();







