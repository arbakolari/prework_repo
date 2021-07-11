// JavaScript source code
var array = [1, 45, 32, 21, 5, 17, 43, 93];
var answers = document.querySelector(".assignment-5-answers");
let product;

for (var i = 0; i < array.length; i++) {
    product = array[i] * 7;
    console.log(product)
    answers.innerText += product + ", ";
}