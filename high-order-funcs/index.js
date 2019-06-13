/*
function logEach(array) {
    for (let i = 0; i <= array.length; i++)
        console.log(array[i]);
}
logEach([1,2,3,4,5]);*/

/*
function forEach(array, action) {
    for (let i = 0; i < array.length; i++)
        action(array[i]);
}
forEach(["John DOe", "Jane doe", "Well smith"], console.log);
*/

/*
let numbers = [1, 2, 3, 4, 5], sum = 0;
forEach(numbers, function (number) {
    sum += number;
});
console.log(sum);*/

/*function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2]));
}

function forEach(array, action) {
    for (let i = 0; i < array.length; i++)
        action(array[i]);
}

function gatherCorrelations(journal) {
    let phis = {};
    journal.forEach(function (entry) {
        entry.events.forEach(function(event) {
            if (!(event in phis))
                phis[event] = phi(tableFor(event, journal));
        });
    });
    return phis;
}*/

/*function greaterThan(n) {
    return function (m) {
        return m > n;
    }
}
let greaterThan10  = greaterThan(10);
console.log(greaterThan10(8));*/

function noisy(f) {
    return function(arg) {
        console.log("Calling with ", arg);
        var val = f(arg);
        console.log("Called with ", arg, "- got", val);
        return val;
    };
}
//noisy(Boolean)(0);

function unless(test, then) {
    if (!test) then();
}

function repeat(times, body) {
    for(let i = 0; i < times; i++) body(i);
}

repeat(3, function (n) {
    unless(n % 2, function() {
        console.log(n, " is even");
    });
});


function transparentWrapper(f) {
    return function() { return f.apply(null, arguments); }
}

