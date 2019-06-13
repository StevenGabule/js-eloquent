/*
let rabbit = {};
rabbit.speak = function (line) {
    console.log("The rabbit says '" + line + "'");
};

rabbit.speak("Hello OOP Programming");*/

/*function speak(line) {
    console.log("The " + this.type + " rabbit says '"+line+"'");
}
let whiteRabbit = { type: "White", speak: function(line) { console.log("The " + this.type + " rabbit says '"+line+"'"); }};
let redRabbit = { type: "Red", speak: speak };
whiteRabbit.speak("Programming in JS is worth studying.");
redRabbit.speak("Programming in js with PHP is more amazing.");*/

/*console.log(Object.getPrototypeOf({}) === Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));*/

/*
let protoRabbit = {
    speak: function (line) {
        console.log("The " + this.type + " rabbit says '" + line + "'");
    }
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "Killer";
killerRabbit.speak("SKYREE!!!");
*/

/*function Rabbit(type) {
    this.type = type;
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("Blacked");
console.log(killerRabbit.type);
console.log(blackRabbit.type);

Rabbit.prototype.speak = function(line) {
    console.log("The " + this.type + " rabbit says '"+ line+"'" );
};
blackRabbit.speak("Learning programming algorithm");
Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
console.log(blackRabbit.teeth);
console.log(Rabbit.prototype.teeth);*/

/*console.log(Array.prototype.toString === Object.prototype.toString);
console.log([1,2].toString());
console.log(Object.prototype.toString.call([1,2]));*/

/*let map = {};
function storePhi(event, phi) {
    map[event] = phi;
}
storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
Object.prototype.nonsense = "hi";
for (let name in map) {
    console.log(name);
}*/

// delete Object.prototype.nonsense;
// Object.defineProperty(Object.prototype, "hiddenNonsense", { enumerable: false, value: "hi"});
// console.log(map.hiddenNonsense);

function rowHeights(rows) {
    return rows.map(function (row) {
        return row.reduce(function (max, cell) {
            return Math.max(max, cell.minHeight());
        }, 0);
    });
}

function colWidths(rows) {
    return rows[0].map(function (_, i) {
        return rows.reduce(function (max, row) {
            return Math.max(max, row[i].minWidth());
        }, 0);
    });
}

function drawTable(rows) {
    let heights = rowHeights(rows);
    let widths = colWidths(rows);

    function drawLine(blocks, lineNo) {
        return blocks.map(function (block) {
            return block[lineNo];
        }).join(" ");
    }

    function drawRow(row, rowNum) {
        let blocks = row.map(function (cell, colNum) {
            return cell.draw(widths[colNum], heights[rowNum]);
        });
        return blocks[0].map(function (_, lineNo) {
            return drawLine(blocks, lineNo);
        }).join("\n");
    }

    return rows.map(drawRow).join("\n")
}

function repeat(string, times) {
    let result = "";
    for (let i = 0; i < times; i++)
        result += string;
    return result;
}

function TextCell(text) {
    this.text = text.split("\n");
}

TextCell.prototype.minWidth = function () {
    return this.text.reduce(function (width, line) {
        return Math.max(width, line.length);
    }, 0);
};
TextCell.prototype.minHeight = function () {
    return this.text.length;
};

TextCell.prototype.draw = function (width, height) {
    let result = [];
    for (let i = 0; i < height; i++) {
        let line = this.text[i] || "";
        result.push(line + repeat(" ", width - line.length));
    }
    return result;
};

let MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, country: "Tanzania", postalCode: "092888"},
    {name: "Everest", height: 8848, country: "Nepal", postalCode: "192888"},
    {name: "Mount Fuji", height: 3776, country: "Japan", postalCode: "292888"},
    {name: "Mont Blanc", height: 4808, country: "Italy/France", postalCode: "392888"},
    {name: "Vaalserberg", height: 323, country: "Netherlands", postalCode: "492888"},
    {name: "Denali", height: 6168, country: "United States", postalCode: "592888"},
    {name: "Popocatepetl", height: 5465, country: "Mexico", postalCode: "692888"}
];

if (typeof module !== "undefined" && module.exports)
    module.exports = MOUNTAINS;

let rows = [];
for (let i = 0; i < 5; i++) {
    let row = [];
    for (let j = 0; j < 5; j++) {
        if ((j + i) % 2 === 0)
            row.push(new TextCell("##"));
        else
            row.push(new TextCell("  "))
    }
    rows.push(row);
}
console.log(drawTable(rows));

function UnderlinedCell(inner) {
    this.inner = inner;
}

UnderlinedCell.prototype.minWidth = function () {
    return this.inner.minWidth();
};

UnderlinedCell.prototype.minHeight = function () {
    return this.inner.minHeight() + 1;
};

UnderlinedCell.prototype.draw = function (width, height) {
    return this.inner.draw(width, height - 1).concat([repeat("-", width)]);
};

function dataTable(data) {
    let keys = Object.keys(data[0]);
    let headers = keys.map(function (name) {
        return new UnderlinedCell(new TextCell(name));
    });
    let body = data.map(function (row) {
        return keys.map(function (name) {
            if (typeof value === "number")
                return new RTextCell(String(value));
            else
                return new TextCell(String(row[name]));
        });
    });
    return [headers].concat(body);
}

console.log(drawTable(dataTable(MOUNTAINS)));

/*let pile = {
    elements: ["eggshell", "orange peel", "worm"],
    get height() {
        return this.elements.length;
    },
    set height(value) {
        console.log("Ignoring attempt to set height to", value);
    }
};
console.log(pile.height);
pile.height = 100;
console.log(pile.height);*/

/*Object.defineProperty(TextCell.prototype, "heightProp", { get: function () {
        return this.text.length;
    }});

let cell = new TextCell("no\nway");
console.log(cell.heightProp);
cell.heightProp = 100;
console.log(cell.heightProp);*/

function RTextCell(text) {
    TextCell.call(this, text);
}

RTextCell.prototype = Object.create(TextCell.prototype);
RTextCell.prototype.draw = function (width, height) {
    let result = [];
    for (let i = 0; i < height; i++) {
        let line = this.text[i] || "";
        result.push(repeat(" ", width - line.length) + line);
    }
    return result;
};
console.log(new RTextCell("A") instanceof RTextCell);
console.log(new RTextCell("A") instanceof TextCell);
console.log(new TextCell("A") instanceof RTextCell);
console.log([1] instanceof Array);







