
let part = "===========================";
const arr = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const date = new Date();
let ans = date.getDay();
console.log(arr[ans]);


//for loop ==================================
console.log("for loop " + part)
for (let i = 0; i < 10; i++) {
    console.log(i);
}


//for of loop ==================================
console.log("for of loop " + part)

for (let value of arr) {
    console.log(value)
}

// for in loop ==================================
console.log("for in loop " + part)
for (let value in arr) {
    console.log(value)
}

// While loop ==================================

console.log("While loop " + part)
let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

// do While loop ==================================

console.log("do While loop " + part)
i = 0;
do {
    console.log(arr[i]);
    i++;
} while (i < arr.length);


// for each ==================================

console.log("for each " + part)
const numb= [1,2,3,4,5,6,6,7,8];
let sum = 0;
 
numb.forEach(function(a){
    sum += a;
})
 console.log(sum)


 let land = "javaScript";
 let ans2 = "";
 for (let val of land) {
     ans2 += val + " ";
 }
document.getElementById("demo1").innerHTML = ans2;

let a = 0;
let interval = setInterval(func, 50);
function func() {
    document.getElementById("demo").innerHTML += a;
    if (a == 10) {
        clearInterval(interval);
    }
    a++;
}
