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

/*whiteRabbit.speak("White and cute , Work hard works");
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

function Rabbit(type) {
    this.type = type;
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
Rabbit.prototype.speak = (line) => "The " + blackRabbit.type + " rabbit says '" + line + "'";

console.log(blackRabbit.speak("Doom..."));

















