let todoList = [];

function rememberTo(task) {
    todoList.push(task);
}

function whatIsNext() {
    return todoList.shift();
}

function urgentlyRememberTo(task) {
    todoList.unshift(task);
}

console.log([1, 2, 3, 2, 1].indexOf(2));

function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index + 1));
}

console.log(remove(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], 4));

function argumentCounter() {
    console.log("You gave me", arguments.length, "arguments.");
}

argumentCounter("Straw man", "Tautology", "Ad hominem");
/*
function addEntry(squirrel) {
    let entry = {events: [], squirrel: squirrel};
    for (let i = 1; i < arguments.length; i++) entry.events.push(arguments[i]);
    journal.push(entry);
}
*/

// addEntry(true, "work", "touched tree", "pizza", "running", "television");


function randomPointOnCircle(radius) {
    let angle = Math.random() * 2 * Math.PI;
    return {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle)
    };
}

console.log(Math.ceil(Math.PI));
console.log(Math.cos(Math.PI));
console.log(Math.sin(Math.PI));
console.log(randomPointOnCircle(2));


