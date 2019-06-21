/*
var rabbit = {};
rabbit.speak = function(line) {
    console.log("The rabbit say " + line);
};
rabbit.speak("Hello, Programming");*/

/*

function speak(line) {
    console.log("The " + this.type + " rabbit says '" + line + "'");
}

let whiteRabbit = { type: 'white', speak: speak };
let fatRabbit = { type: 'fat', speak: speak };


*/

/* whiteRabbit.speak("White and cute , Work hard works");
fatRabbit.speak("Lovable fat The weather is kind and nice today");*/

/*speak.apply(fatRabbit, ["Burp!"]);
speak.call({type: "old"}, "Oh my!");*/


/*var protoRabiit = {
    speak: function (line) {
        console.log("The " + this.type + " rabbit says '" + line + "'");
    }
};
var killerRabbit = Object.create(protoRabiit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!!");*/

// function Rabbit(type) {
//     this.type = type;
// }
// let killerRabbit = new Rabbit("killer");
// let blackRabbit = new Rabbit("black");
// Rabbit.prototype.speak = (line) => "The " + blackRabbit.type + " rabbit says '" + line + "'";

// console.log(blackRabbit.speak("Doom..."));

// // define our own nonenumerable properties
// Object.defineProperty(Object.prototype, "hiddenNonsense", { enumerable: false, value: "Hi" });



// ====== table-building system 
function rowHeights(rows) {
    return rows.map(function(row) {
        return row.reduce(function(max, cell) {
            return Math.max(max, cell.minHeight());
        }, 0);
    });
}

function colWidths(rows) {
    return rows[0].map(function(_, i) {
        return rows.reduce(function(max, row) {
            return Math.max(max, row[i].minWidth());
        }, 0);
    });
}

function drawTable(rows) { 
    var heights = rowHeights(rows);
    var widths = colWidths(rows);

    function drawLine(blocks, lineNo) {
        return blocks.map(function(block) {
            return block[lineNo];
        }).join(" ");
    }

    function drawRow(row, rowNum) {
        var blocks = row.map(function(cell, colNum) {
            return cell.draw(widths[colNum], heights[rowNum]);
        });
        return blocks[0].map(function(_, lineNo) {
            return drawLine(blocks, lineNo);
        }).join("\n");
    }
    return rows.map(drawRow).join("\n");
 }

function repeat(string, times) {
    var result = "";
    for(var i = 0; i < times; i++) {
        result += string;
    }
    return result;
}

function TextCell(text) {
    this.text = text.split("\n");
}

TextCell.prototype.minWidth = function() {
    return this.text.reduce(function(width, line) {
        return Math.max(width, line.length);
    }, 0);
};

TextCell.prototype.minHeight = function() {
    return this.text.length;
}

TextCell.prototype.draw = function(width, height) {
    var result = [];
    for(var i = 0; i < height; i++) {
        var line = this.text[i] || "";
        result.push(line + repeat(" ", width - line.length));
    }
    return result;
};


function UnderlineCell(inner) {
    this.inner = inner;
}

UnderlineCell.prototype.minWidth = function() {
    return this.inner.minWidth();
};

UnderlineCell.prototype.minHeight = function() {
    return this.inner.minHeight() + 1;
};

UnderlineCell.prototype.draw = function(width, height) {
    return this.inner.draw(width, height -1).concat([repeat("-", width)]);
};

function dataTables(data) {

    var keys = Object.keys(data[0]);

    var headers = keys.map(function(name) {

        return new UnderlineCell(new TextCell(name));
        
    });

    var body = data.map(function(row) {

        return keys.map(function(name) {

            return new TextCell(String(row[name]));

        });

    });

    return [headers].concat(body);
}

let MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, country: "Tanzania", postalCode: "092888"},
    {name: "Everest", height: 8848, country: "Nepal", postalCode: "192888"},
    {name: "Mount Fuji", height: 3776, country: "Japan", postalCode: "292888"},
    {name: "Mont Blanc", height: 4808, country: "Italy/France", postalCode: "392888"},
    {name: "Mont Johnny", height: 4808, country: "Italy/California", postalCode: "392888"},
    {name: "Mountain Biking", height: 4808, country: "Italy/NZ", postalCode: "392888"},
    {name: "Riding in the beach", height: 4808, country: "Italy/NY", postalCode: "392888"},
    {name: "Jojie binay", height: 4808, country: "Italy/USA", postalCode: "392888"},
    {name: "Cookie Man", height: 4808, country: "Italy/Singapore", postalCode: "392888"},
    {name: "Panty Man", height: 4808, country: "Italy/Philippines", postalCode: "392888"},
    {name: "Pervert Man", height: 4808, country: "Italy/San Francisco", postalCode: "392888"},
    {name: "Dos On dans", height: 4808, country: "Italy/France", postalCode: "392888"},
    {name: "Vaalserberg", height: 323, country: "Netherlands", postalCode: "492888"},
    {name: "Denali", height: 6168, country: "United States", postalCode: "592888"},
    {name: "Popocatepetl", height: 5465, country: "Mexico", postalCode: "692888"}
];

console.log(drawTable(dataTables(MOUNTAINS)));

var rows = [];
for(var i = 0; i < 5; i++) {
    var row = [];
    for(var j = 0; j < 5; j++) {
        if ((j + i) % 2 == 0) {
            row.push(new TextCell("##"));
        } else {
            row.push(new TextCell("  "));
        }
    }
    rows.push(row);
}

// console.log(drawTable(rows));












