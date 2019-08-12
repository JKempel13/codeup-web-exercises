
// var i;
//
// function showMultiplicationTable (num) {
//     for (i = 1; i <= 10; i++){
//         console.log(num + "*" + i + " = " + num * i);
//     }
//
// }
// showMultiplicationTable(7);

// This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
var randomNum;

Math.floor(Math.random() * 200) + 20;

for (randomNum=0; randomNum<=10; randomNum++) {
randomNum = Math.floor(Math.random() * 200) + 20
    if (randomNum === 0) {
        console.log(randomNum +  " is even");
    }
    else if (randomNum % 2 === 0) {
        console.log(randomNum + " is even");
    }
    else {
        console.log(randomNum + " is odd");
    }
}
