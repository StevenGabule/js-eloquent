/*
let dayName = function () {
    let names = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    return function (number) {
        return names[number];
    }
}();
console.log(dayName(3));
*/

/*(function () {
    function square(x) { return x * x; }
    let hundred = 100;
    console.log(square(hundred));
})();*/

/*let weekDay = function () {
    let names = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    return {
        name: function (number) { return names[number];},
        number: function (name) { return names.indexOf(name) }
    };
}();
console.log(weekDay.name((weekDay.number("sunday"))));*/

/*(function (exports) {
    let names = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    exports.name = function (number) {
        return names[number];
    };
    exports.number = function (name) {
        return names.indexOf(name);
    };
})(this.weekDay = {});
console.log(weekDay.name(weekDay.number("saturday")));*/

/*function evalAndReturn(code) {
    eval(code);
    return x;
}
console.log(evalAndReturn("var x = 2"));*/

/*let plusOne = new Function("n", "return n + 1");
console.log(plusOne(4));*/

/*function required(name) {
    let code = new Function("exports", readFile(name));
    let exports = {};
    code(exports);
    return exports;
}
console.log(required("weekDay").name(1));*/

function define(depNames, moduleFunction) {
    let myMod = currentMod;
    let deps = depNames.map(getModule);

    deps.forEach(function (mod) {
        if (!mod.loaded)
            mod.onLoad.push(whenDepsLoaded);
    });

    function whenDepsLoaded() {
        if (!deps.every(function (m) { return m.loaded; }))
            return;

        let args = deps.map(function(m) { return m.exports; });
        let exports = moduleFunction.apply(null, args);
        if (myMod) {
            myMod.exports = exports;
            myMod.loaded = true;
            myMod.onLoad.every(function (f) { f(); });
        }
    }
    whenDepsLoaded();
}


define([], function () {
    var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return {
        name: function (number) {
            return names[number];
        }, number: function (name) {
            return names.indexOf(name);
        }
    };
});




