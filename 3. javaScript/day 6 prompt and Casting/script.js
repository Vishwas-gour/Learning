//   ======================< CASTING >==============================
let name = prompt("Enter your name");

// ------> string cast into int by parseInt() method
let age = parseInt(prompt("Enter your age "));
document.getElementById("h1").innerHTML = name + " " + age;
// ------> cast into float
function castFloat(r) {
    return parseFloat(2 * r * Math.PI);
}
console.log(casting(7))

let x = '23';
console.log("value dataTyp")
console.log(x, typeof x);
let ans = Number(x);
console.log(ans, typeof ans)

// ------> cast into String by .toString() method
let numb1 = 34;
let numb2 = numb1.toString();
console.log(numb1, typeof numb1);
console.log(numb2, typeof numb2);

// ------> input as Number
let i = parseInt(prompt("enter numb 1"));
let j = parseInt(prompt("enter numb 2"));
const twoNumb = () => i * j;
console.log(twoNumb());
