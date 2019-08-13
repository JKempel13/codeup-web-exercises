while (true) {
    var chosenNumber = prompt ("Choose a number between 0 and 50");
    if (chosenNumber % 2 !== 0 && chosenNumber > 0 && chosenNumber < 51) {
        break;
    }
}

console.log("number to skip is: " + chosenNumber);

for (var i = 1; i < 50; i += 2) {
    if (i % 2 === 0) {
        continue;
    }
    if (i == chosenNumber) {
        console.log("Yikes! Skipping number: " + chosenNumber);
    } else {
        console.log("Here is an odd number: " + i);
    }

    if (i >=49) {
        break;
    }
}
