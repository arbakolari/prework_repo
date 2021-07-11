// JavaScript source code
var names_array = ["bob", "jimmy", "max b", "bernie", "jordan", "future hendrix"];
var even_array = [];
var odd_array = [];
let newEvenName;

function evenOrOdd(num) { 
    if (num % 2 == 0) {
        even_array.push("b" + names_array[i].substr(1, names_array[i].length));
    } else {
        odd_array.push(names_array[i].substr(0, names_array[i].length - 1) + "c");
    }
}

for (var i = 0; i < names_array.length; i++) {
    evenOrOdd(names_array[i].length);
}

console.log(even_array);
console.log(odd_array);