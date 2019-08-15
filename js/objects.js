(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    // var person = {
    //     firstName: "Jason",
    //     lastName: "Kempel"
    // };
    //
    // console.log(person.firstName);
    // console.log(person.lastName);


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    // var person = {
    //     firstName: "Jason",
    //     lastName: "Kempel",
    //     sayHello: function() {
    //         return "Hello from " + person.firstName + " " + person.lastName + "!";
    //     }
    // };
    //
    // console.log(person.sayHello());


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    var discountedPrice;
    if (shoppers.amount > 200) {
        discountedPrice = .12 * shoppers.amount;
    }
    console.log(discountedPrice);

    for (var j = 0; j < shoppers.length; j++) {
        console.log(shoppers[j].name);
        console.log(shoppers[j].amount);
        // console.log()
    }






    //needs to show the shoppers name,
    // the amount spent,
    // and the discount if applied
    //if the shopper spend more than 200, they get a 12% discount.




    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    // var books = [
    //     {
    //         name: "Leader in Me",
    //         author: {
    //             firstname: "Stephen",
    //             lastname: "Covey"
    //         }
    //     },
    //     {
    //         name: "Alice's Adventures in Wonderland",
    //         author: {
    //             firstname: "Lewis",
    //             lastname: "Carroll"
    //         }
    //     },
    //     {
    //         name: "The Three Musketeers",
    //         author: {
    //             firstname: "Alexandre",
    //             lastname: "Dumas"
    //         }
    //     }
    // ];
    //
    // console.log(books[2].name);
    // console.log(books[2].author.firstname);
    // console.log(books[2].author.lastname);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // var books = [
    //     {
    //         name: "Leader in Me",
    //         author: {
    //             firstname: "Stephen",
    //             lastname: "Covey"
    //         }
    //     },
    //     {
    //         name: "Alice's Adventures in Wonderland",
    //         author: {
    //             firstname: "Lewis",
    //             lastname: "Carroll"
    //         }
    //     },
    //     {
    //         name: "The Three Musketeers",
    //         author: {
    //             firstname: "Alexandre",
    //             lastname: "Dumas"
    //         }
    //     }
    // ];
    //
    // for (var i = 0; i < books.length; i++) {
    //     console.log("Book # " + (i + 1));
    //     console.log("Title: " + books[i].name);
    //     console.log("Author: " + books[i].author.firstname + " " + books[i].author.lastname);
    //     console.log("---");
    // }


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();
