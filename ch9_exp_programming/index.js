/*
let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'").toString());*/
/*
console.log(/bad(ly)?/.exec("bad"));
console.log(/(\d)+/.exec("123"));
console.log(new Date());
console.log(new Date(2009, 11, 9));
console.log(new Date(2009, 11, 9, 12, 59, 59, 999));
console.log(new Date(2013, 11, 19).getTime());
console.log(new Date(1387407600000));*/
/*
function findDate(string) {
    let dateTime = /(\d{1,2})-(\d{1,2})-(\d{4})/;
    let match= dateTime.exec(string);
    return new Date(Number(match[3]), Number(match[2]), Number(match[1]));
}
console.log(findDate("30-1-2003"));
*/
/*var animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs"));
console.log(animalCount.test("15 pigchickens"));*/ // . false


/*
console.log("Borobudur".replace(/[ou]/, "a"));
console.log("Borobudur".replace(/[ou]/g, "a"));
console.log( "Hopper, Grace\nMcCarthy, John\nRitchie, Dennis" .replace(/([\w ]+), ([\w ]+)/g, "$2 $1"));
*/

/*let s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, function(str) {
    return str.toUpperCase();
}));*/

/*let stock = "1 lemon, 2 cabbages and 101 eggs";
function minusOne(match, amount, unit) {
    amount = Number(amount)-1;
    if (amount === 1)
        unit = unit.slice(0, unit.length-1);
    else
        amount = "no";
    return amount + " " + unit;
}

console.log(stock.replace(/(\d+) (\w+)/g, minusOne));*/

/*function stripComments(code) {
    return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}
console.log(stripComments("1+/!*2*!/3"));
console.log(stripComments("x = 10;// ten!"));
console.log(stripComments("1 /!* a *!/+/!* b *!/ 1"));*/

/*
function stripComments(code) {
    return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}

console.log(stripComments("1 /!* a *!/+/!* b *!/ 1"));
*/
/*let name = "harry";
let text = "Harry is a suspicious character.";
let regexp = new RegExp("\\b(" + name + ")\\b", "gi");
console.log(text.replace(regexp, "__$1__"));*/
/*let name = "dea+hl[]rd";
let text = "This dea+hl[]rd guy is super annoying.";
let escaped = name.replace(/[^\w\s]/g, "\\$&");
let regexp = new RegExp("\\b(" + escaped + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));*/

/*
let input = "A string with 3 numbers in it... 42 and 88.";
console.log(input.length);
let number = /\b(\d+)\b/g;
let match;
while (match = number.exec(input))
    console.log("Found", match[1], "at", match.index);
*/

/*
function parseINI(string) { // Start with an object to hold the top-level fields
    let currentSection = {name: null, fields: []};
    let categories = [currentSection];
    string.split(/\r?\n/).forEach(function (line) {
        let match;
        if (/^\s*(;.*)?$/.test(line)) {
            return '';
        } else if (match = line.match(/^\[(.*)\]$/)) {
            currentSection = {name: match[1], fields: []};
            categories.push(currentSection);
        } else if (match = line.match(/^(\w+)=(.*)$/)) {
            currentSection.fields.push({name: match[1], value: match[2]});
        } else {
            throw new Error("Line '" + line + "' is invalid.");
        }
    });
    return categories;
}
*/

/*const today = new Date('2019-01-05');
function addBusinessDays(date, days) {
    while (days > 0) {
        date.add(1, 'days');
        if (date.isoWeekday() !== 6 && date.isoWeekday() !== 7) {
            days -= 1;
        }
    }
    return date;
}
const result = addBusinessDays(today, 10);
console.log(result.format('MMMM D, YYYY'));*/














