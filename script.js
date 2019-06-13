// PROGRAM STRUCTURE
// looping a triangle
/*
let result = "#";
while(result.length <= 7) {
    console.log(result);
    result +=  "#";
}*/


// FizzBuzz
/*
for (let x = 1; x <= 100; x++) {
    if (x % 3 === 0) {
        console.log( x + ": Fizz");
    } else if (x % 5 === 0) {
        console.log(x + ": Buzz");
    }
}*/


// Chess Board
/*let grid = "";
for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
        if (y % 2 === 0) {
            grid = grid + "#";
        }  else {
            grid += " ";
        }
    }
    console.log(grid);
    if (x % 2 === 0) {
        grid=" ";
    } else {
        grid="";
    }
}*/

// Eloquent Javascript Chess Board
/*let size = 8;
let board = "";
for(let y= 0; y < size; y++) {
    for (let x = 0; x< size; x++) {
        if ((x+y) % 2 === 0) {
            board +=" ";
        }  else {
            board +="#";
        }
    }
    board += "\n";
}
console.log(board);*/

// FUNCTIONS
/*let x = "outside";
let f1 = function() {
    let x = "inside f1";
};
f1();
console.log(x);

let f2 = function () {
    x = "inside of f2";
};
f2();
console.log(x);*/

/*let landscape = function () {
    let result = "";
    let flat = function (size) {
        for (let count =0; count<size;count++) {
            result += "_";
        }
    };
    let mountain = function (size) {
        result += "/";
        for (let count = 0; count < size; count++) {
            result += "'";
        }
        result +="\\";
    };
    flat(3);
    mountain(4);
    flat(6);
    mountain(1);
    flat(1);
    return result;
};
console.log(landscape())*/


/*
function chicken() { return egg(); }
function egg() { return chicken(); }
console.log(chicken() + " came first.");
*/

/*
function multiplier(factor) {
    return function(number) {
        return number * factor ;
    }
}
let twice = multiplier(10);
console.log(twice(5));
*/

/*
function power(base, exponent) {
    if  (exponent === 0)
        return 1;
    else
        return base * power(base, exponent-1);
}
console.log(power(4,3));
*/

/*function findSolution(target) {
    function find(start, history) {
        if (start == target)
            return history;
        else if (start > target)
            return null;
        else
            return find(start + 5, "(" + history + " + 5)") || find(start  * 3, "(" + history + " * 3)" );
    }
    return find(1, "1");
}
console.log(findSolution(164));*/

/*function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while(cowString.length < 3)
        cowString = "O" + cowString;
    console.log(cowString + " Cows");
    let chickenString = String(chickens);
    while(chickenString.length < 3)
        chickenString = "O" + chickenString;
    console.log(chickenString + " Chickens");
}
printFarmInventory(7, 11);*/

/*function printZeroPaddedWithLabel(number, label) {
    let numberString = String(number);
    while(numberString.length < 3)
        numberString = "O" + numberString;
    console.log(numberString + " " + label);
}

function printFarmInventory(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "Chickens");
    printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory(7, 11, 3);*/

/*function zeroPad(number, width) {
    let string = String(number);
    while(string.length < width)
        string = "O" + string;
    return string;
}

function printFarmInventory(cows, chickens, pigs) {
    console.log(zeroPad(cows, 3) + " Cows");
    console.log(zeroPad(chickens, 3) + " Chickens");
    console.log(zeroPad(pigs, 3) + " Pigs");
}

printFarmInventory(7, 16, 3);*/

/*function min(num1, num2) {
    return (num1 > num2 ) ? num2 : num1;
}
console.log(min(7,3));*/

/*
let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running", "television"]
};
console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);
*/


/*let anObject = {left: 1, right: 2};
delete anObject.left;
console.log(anObject.left);
console.log("left" in anObject);
console.log("right" in anObject);*/

/*
let object1 =  { value: 10};
let object2 =  object1;
let object3 =  { value: 10};

console.log(object1 === object2);
console.log(object1 === object3);

object1.value = 15;
console.log(object1.value);
console.log(object2.value);
console.log(object3.value);
*/

/*let journal = [];
function addEntry(events, didTurnIntoSquirrel) {
    journal.push({
        events : events,
        squirrel: didTurnIntoSquirrel
    });
}
addEntry(["exercise", "read some bible verse", "Facebook"], false);
addEntry(["go to market", "read some problem solving book", "read some online news"], false);
addEntry(["exercise 2", "read some bible verse 2", "Facebook 2"], true);

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
         Math.sqrt((table[2] + table[3]) *
                   (table[0] + table[1]) *
                   (table[1] + table[3]) *
                   (table[0] + table[2]));
}
console.log(phi([76, 9, 4, 1]));*/

let JOURNAL = [
    {"events": ["carrot", "exercise", "weekend"], "squirrel": false},
    {"events": ["bread", "pudding", "brushed teeth", "weekend", "touched tree"], "squirrel": false},
    {"events": ["carrot", "nachos", "brushed teeth", "cycling", "weekend"], "squirrel": false},
    {"events": ["brussel sprouts", "ice cream", "brushed teeth", "computer", "weekend"], "squirrel": false},
    {"events": ["potatoes", "candy", "brushed teeth", "exercise", "weekend", "dentist"], "squirrel": false},
    {"events": ["brussel sprouts", "pudding", "brushed teeth", "running", "weekend"], "squirrel": false},
    {"events": ["pizza", "brushed teeth", "computer", "work", "touched tree"], "squirrel": false},
    {"events": ["bread", "beer", "brushed teeth", "cycling", "work"], "squirrel": false},
    {"events": ["cauliflower", "brushed teeth", "work"], "squirrel": false},
    {"events": ["pizza", "brushed teeth", "cycling", "work"], "squirrel": false},
    {"events": ["lasagna", "nachos", "brushed teeth", "work"], "squirrel": false},
    {"events": ["brushed teeth", "weekend", "touched tree"], "squirrel": false},
    {"events": ["lettuce", "brushed teeth", "television", "weekend"], "squirrel": false},
    {"events": ["spaghetti", "brushed teeth", "work"], "squirrel": false},
    {"events": ["brushed teeth", "computer", "work"], "squirrel": false},
    {"events": ["lettuce", "nachos", "brushed teeth", "work"], "squirrel": false},
    {"events": ["carrot", "brushed teeth", "running", "work"], "squirrel": false},
    {"events": ["brushed teeth", "work"], "squirrel": false},
    {"events": ["cauliflower", "reading", "weekend"], "squirrel": false},
    {"events": ["bread", "brushed teeth", "weekend"], "squirrel": false},
    {"events": ["lasagna", "brushed teeth", "exercise", "work"], "squirrel": false},
    {"events": ["spaghetti", "brushed teeth", "reading", "work"], "squirrel": false},
    {"events": ["carrot", "ice cream", "brushed teeth", "television", "work"], "squirrel": false},
    {"events": ["spaghetti", "nachos", "work"], "squirrel": false},
    {"events": ["cauliflower", "ice cream", "brushed teeth", "cycling", "work"], "squirrel": false},
    {"events": ["spaghetti", "peanuts", "computer", "weekend"], "squirrel": true},
    {"events": ["potatoes", "ice cream", "brushed teeth", "computer", "weekend"], "squirrel": false},
    {"events": ["potatoes", "ice cream", "brushed teeth", "work"], "squirrel": false},
    {"events": ["peanuts", "brushed teeth", "running", "work"], "squirrel": false},
    {"events": ["potatoes", "exercise", "work"], "squirrel": false},
    {"events": ["pizza", "ice cream", "computer", "work"], "squirrel": false},
    {"events": ["lasagna", "ice cream", "work"], "squirrel": false},
    {"events": ["cauliflower", "candy", "reading", "weekend"], "squirrel": false},
    {"events": ["lasagna", "nachos", "brushed teeth", "running", "weekend"], "squirrel": false},
    {"events": ["potatoes", "brushed teeth", "work"], "squirrel": false},
    {"events": ["carrot", "work"], "squirrel": false},
    {"events": ["pizza", "beer", "work", "dentist"], "squirrel": false},
    {"events": ["lasagna", "pudding", "cycling", "work"], "squirrel": false},
    {"events": ["spaghetti", "brushed teeth", "reading", "work"], "squirrel": false},
    {"events": ["spaghetti", "pudding", "television", "weekend"], "squirrel": false},
    {"events": ["bread", "brushed teeth", "exercise", "weekend"], "squirrel": false},
    {"events": ["lasagna", "peanuts", "work"], "squirrel": true},
    {"events": ["pizza", "work"], "squirrel": false},
    {"events": ["potatoes", "exercise", "work"], "squirrel": false},
    {"events": ["brushed teeth", "exercise", "work"], "squirrel": false},
    {"events": ["spaghetti", "brushed teeth", "television", "work"], "squirrel": false},
    {"events": ["pizza", "cycling", "weekend"], "squirrel": false},
    {"events": ["carrot", "brushed teeth", "weekend"], "squirrel": false},
    {"events": ["carrot", "beer", "brushed teeth", "work"], "squirrel": false},
    {"events": ["pizza", "peanuts", "candy", "work"], "squirrel": true},
    {"events": ["carrot", "peanuts", "brushed teeth", "reading", "work"], "squirrel": false},
    {"events": ["potatoes", "peanuts", "brushed teeth", "work"], "squirrel": false},
    {"events": ["carrot", "nachos", "brushed teeth", "exercise", "work"], "squirrel": false},
    {"events": ["pizza", "peanuts", "brushed teeth", "television", "weekend"], "squirrel": false},
    {"events": ["lasagna", "brushed teeth", "cycling", "weekend"], "squirrel": false},
    {"events": ["cauliflower", "peanuts", "brushed teeth", "computer", "work", "touched tree"], "squirrel": false},
    {"events": ["lettuce", "brushed teeth", "television", "work"], "squirrel": false},
    {"events": ["potatoes", "brushed teeth", "computer", "work"], "squirrel": false},
    {"events": ["bread", "candy", "work"], "squirrel": false},
    {"events": ["potatoes", "nachos", "work"], "squirrel": false},
    {"events": ["carrot", "pudding", "brushed teeth", "weekend"], "squirrel": false},
    {"events": ["carrot", "brushed teeth", "exercise", "weekend", "touched tree"], "squirrel": false},
    {"events": ["brussel sprouts", "running", "work"], "squirrel": false},
    {"events": ["brushed teeth", "work"], "squirrel": false},
    {"events": ["lettuce", "brushed teeth", "running", "work"], "squirrel": false},
    {"events": ["candy", "brushed teeth", "work"], "squirrel": false},
    {"events": ["brussel sprouts", "brushed teeth", "computer", "work"], "squirrel": false},
    {"events": ["bread", "brushed teeth", "weekend"], "squirrel": false},
    {"events": ["cauliflower", "brushed teeth", "weekend"], "squirrel": false},
    {"events": ["spaghetti", "candy", "television", "work", "touched tree"], "squirrel": false},
    {"events": ["carrot", "pudding", "brushed teeth", "work"], "squirrel": false},
    {"events": ["lettuce", "brushed teeth", "work"], "squirrel": false},
    {"events": ["carrot", "ice cream", "brushed teeth", "cycling", "work"], "squirrel": false},
    {"events": ["pizza", "brushed teeth", "work"], "squirrel": false},
    {"events": ["spaghetti", "peanuts", "exercise", "weekend"], "squirrel": true},
    {"events": ["bread", "beer", "computer", "weekend", "touched tree"], "squirrel": false},
    {"events": ["brushed teeth", "running", "work"], "squirrel": false},
    {"events": ["lettuce", "peanuts", "brushed teeth", "work", "touched tree"], "squirrel": false},
    {"events": ["lasagna", "brushed teeth", "television", "work"], "squirrel": false},
    {"events": ["cauliflower", "brushed teeth", "running", "work"], "squirrel": false},
    {"events": ["carrot", "brushed teeth", "running", "work"], "squirrel": false},
    {"events": ["carrot", "reading", "weekend"], "squirrel": false},
    {"events": ["carrot", "peanuts", "reading", "weekend"], "squirrel": true},
    {"events": ["potatoes", "brushed teeth", "running", "work"], "squirrel": false},
    {"events": ["lasagna", "ice cream", "work", "touched tree"], "squirrel": false},
    {"events": ["cauliflower", "peanuts", "brushed teeth", "cycling", "work"], "squirrel": false},
    {"events": ["pizza", "brushed teeth", "running", "work"], "squirrel": false},
    {"events": ["lettuce", "brushed teeth", "work"], "squirrel": false},
    {"events": ["bread", "brushed teeth", "television", "weekend"], "squirrel": false},
    {"events": ["cauliflower", "peanuts", "brushed teeth", "weekend"], "squirrel": false}
];
/*
// This makes sure the data is exported in node.js —
// `require('./path/to/journal.js')` will get you the array.
if (typeof module !== "undefined" && module.exports && (typeof window === "undefined" || window.exports !== exports))
    module.exports = JOURNAL;
if (typeof global !== "undefined" && !global.JOURNAL)
    global.JOURNAL = JOURNAL;

function hasEvent(event, entry) {
    return entry.events.indexOf(event) !== -1;
}

function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
        if (hasEvent(event, entry)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}

/!*
console.log(tableFor("pizza", JOURNAL));
console.log(JOURNAL.length);
*!/
function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2]));
}

function gatherCorrelations(journal) {
    let phis = {};
    for (let entry = 0; entry < journal.length; entry++) {
        let events = journal[entry].events;
        for (let i = 0; i < events.length; i++) {
            let event = events[i];
            if (!(event in phis))
                phis[event] = phi(tableFor(event, journal));
        }
    }
    return phis;
}

let correlations = gatherCorrelations(JOURNAL);
console.log(correlations.pizza);

for (let event in correlations) {
    let correlation = correlations[event];
    if (correlation > 0.1 || correlation < -0.1)  {
        console.log(event + " : " + correlation);
    }
}

for (let i = 0; i < JOURNAL.length; i++) {
    let entry = JOURNAL[i];
    if (hasEvent("peanuts", entry) && !hasEvent("brushed teeth", entry)) {
        entry.events.push("peanut teeth");
    }
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));
*/
/*console.log([1,2,3,2,1].indexOf(2));
console.log([1,2,3,2,1].lastIndexOf(2));*/

/*
function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index+1));
}
console.log(remove(["a","b", "c", "d", "e"], 2));
*/
/*

function addEntry(squirrel) {
    let entry = { events: [], squirrel: squirrel};
    for (let i = 1; i < squirrel.length;i++)
        entry.events.push(arguments[i]);
    JOURNAL.push(entry);
}
addEntry(true,  "work", "touched tree", "pizza", "running", "television");
console.log(JOURNAL);*/

function randomPointCircle(radius) {
    let angle = Math.random() * 2 * Math.PI;
    return { x: radius * Math.cos(angle),
             y: radius * Math.sin(angle)}
}
console.log(randomPointCircle(10));





