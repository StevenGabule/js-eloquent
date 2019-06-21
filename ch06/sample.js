/*
APPLY FUNCTION
var numbers = [3,12,3,4,5,6];
var max = Math.max.apply(null, numbers);
console.log(max); // 12

var min = Math.min.apply(null, numbers);
console.log(min); // 3
*/

/** 
function Product(name, price) { 
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}

console.log(new Food('cheese', 5).name);
console.log(new Food('Drinks', 15).price);
*/

// MAP FUNCTION
// var numbers = [4, 9, 16, 25];
// console.log(numbers.map(Math.sqrt).join("\t").toString());


let numbers = [175, 100, 25];
// function SubTract(total, num) { return total - num; }
console.log(numbers.reduce((total, num) => total - num));



