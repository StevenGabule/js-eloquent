"use strict";
function canYouSpotTheProgram() {
    for (let counter = 0; counter < 10; counter++) {
        console.log("happy happy " + counter);
    }
}
// canYouSpotTheProgram()

function Person(name) {
    this.name = name;
}

let person = new Person("Hello, John Paul ");
console.log(person.name);