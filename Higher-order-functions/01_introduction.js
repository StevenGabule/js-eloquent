/*function sum(num) { }
console.log(sum(range(1, 10)));
*/

/*let total = 0;
let count = 0;
while (count <= 10) {
    total += count;
    count += 1;
}
console.log(count);*/

/*
function forEach(array, action) {
    for (var i = 0; i < array.length; i++)
        action(array[i]);
}

forEach(["Wampeter", "Foma", "Granfalloon"], console.info);
//   output:
// . Wampeter
// .  Foma
// . Granfalloon

*/

/*function forEach(array, action) {
    for (let i = 0; i < array.length; i++)
        action(array[i]);
}

let numbers= [1,2,3,4,5];
let sum = 0;
forEach(numbers, (number) => {
   sum += number;
});
console.log(sum);*/

/*
// old code and rubbish
function gatherCorrelations(journal) {
    let phis = {};
    for (let entry = 0; entry < journal.length; entry++) {
        let events = journal[entry].events;
        for (let i = 0; i < events.length; i++) {
            let event = events[i];
            if (!(event in phis)) {
                phis[event] = phi(tableFor(event, journal));
            }
        }
    }
    return phis;
}

// code cleaner and shorter but also easy to read and understand
function gatherCorrelations(journal) {
    let phis = {};
    journal.forEach(function(entry) {
        entry.events.forEach(function(event) {
            if (!(event in phis))
                phis[event] = phi(tableFor(event, journal));
        });
    });
    return phis;
}
*/

/*
function greaterThan(n) {
    return  (m) => m > n;
}

let greaterThan10 = greaterThan(50);
console.log(greaterThan10(60));
*/

/*function noisy(f) {
    return (arg) =>  {
        console.log("calling with", arg);
        console.log("called with", arg, "- got", f(arg));
        return f(arg);
    };
}

noisy(Boolean)(1);*/

/*function unless(test, then) {
    if (!test) then();
}

function repeat(times, body) {
    for (let i = 0; i < times; i++) body(i);
}

repeat(1001, function (n) {
    unless(n % 2, function() {
        console.log(n, "is even");
    });
});*/

/*function transparentWrapper(f) {
    return () => {
        return f.apply(null, arguments);
    };
}*/

/*
let string  = JSON.stringify({ name: "X", born: 1980});
console.log(string);
console.log(JSON.parse(string).name);
console.log(JSON.parse(string).born);
*/

// let ANCESTRY_FILE = "http://eloquentjavascript.net/2nd_edition/code/ancestry.js";
let ANCESTRY_FILE = JSON.stringify([
    {"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"},
    {"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"},
    {"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"},
    {"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"},
    {"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
    {"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null},
    {"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null},
    {"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"},
    {"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"},
    {"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"},
    {"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null},
    {"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"},
    {"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"},
    {"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"},
    {"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null},
    {"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
    {"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"},
    {"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"},
    {"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
    {"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
    {"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null},
    {"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"},
    {"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"},
    {"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"},
    {"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
    {"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
    {"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"},
    {"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
    {"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
    {"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
    {"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"},
    {"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"},
    {"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
    {"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"},
    {"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"},
    {"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
    {"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"},
    {"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"},
    {"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}
]);
// This makes sure the data is exported in node.js —
// `require("./path/to/ancestry.js")` will get you the array.
if (typeof module !== "undefined" && module.exports) module.exports = ANCESTRY_FILE;

/*// Filtering an Array
// To find the people in the ancestry data set who were young in 1924, the following function might be helpful.
function filter(array, test) {
    let passed = [];
    for (let i = 0; i < array.length; i++)
        if (test(array[i]))
            passed.push(array[i]);
    return passed;
}

let ancestry = JSON.parse(ANCESTRY_FILE);
console.log(filter(ancestry, (person) => person.born > 1900 && person.born < 1925 ));*/
/*let ancestry = JSON.parse(ANCESTRY_FILE);

function map(array, transform) {
    let mapped = [];
    for (let i = 0; i < array.length; i++)
        mapped.push(transform(array[i]));
    return mapped;
}
let overNinety = ancestry.filter((person) => person.died - person.born > 90 );
console.log(map(overNinety, (person) => person.name ));*/

/*function reduce(array, combine, start) {
    let current = start;
    for (let i =0; i <array.length;i++)
        current = combine(current, array[i]);
    return current;
}

console.log(reduce([1,2,3,4], (a,b) => a + b, 0));*/

let ancestry = JSON.parse(ANCESTRY_FILE);
console.log(ancestry.reduce((min, cur) => {
    if (cur.born < min.born) return cur;
    else return min;
}));
















