const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


// 2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let userLanguages = users.filter(user => user.languages.length >= 3);
// console.log(userLanguages);

// 3. Use .map to create an array of strings where each element is a user's email address

let userEmail = users.map(user => user.email);
// console.log(userEmail);

// 4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

let totalYears = users.reduce((totalYearsOfExperience, user) => totalYearsOfExperience + user.yearsOfExperience, 0);
// console.log(totalYears);
//

// console.log(totalYears/users.length);

// 5. Use .reduce to get the longest email from the list of users.

let longestEmail = users.reduce((longEmail,user)=> {
    if (user.email.length > longEmail.length){
        longEmail = user.email;
    }
    return longEmail;
}," ");
//
// console.log(longestEmail);

// 6. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

// let instructorNames = users.reduce((instructors, user) => instructors + user.name + ", ", `Your instructors are: `);
let instructors = users.reduce((sentence,user, i)=> {
    if (i < users.length -1) {
        sentence += user.name + ", ";
    } else {
        sentence += `and ${user.name}.`
    }
    return sentence;
}, " Your instructors are : ");

// console.log(instructors);

//======================== JOHN'S BONUS =======================//
const uniqueLanguages = users.reduce((listOfLangs, user) => {
    for (const lang of user.languages) {
        if(listOfLangs.indexOf(lang) === -1) {
            listOfLangs.push(lang);
        }
    }
    return listOfLangs;
}, []);

// console.log(uniqueLanguages);



