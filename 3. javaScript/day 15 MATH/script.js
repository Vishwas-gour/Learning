
// console.log(Math.round(10.6));//--> it will return near value 11;
// console.log(Math.ceil(10.1)); // --> it will return top value 11
// console.log(Math.floor(10.9)); // --> it will return low value 10
// console.log(Math.trunc(10.6)); // --> it will return integer value not decimal value
// console.log(Math.sign(-10)) //--->return 1 for +ve , -1 for -ve , 0 for 0
// console.log(Math.pow(2,4)) //--->return power 
// console.log(Math.abs(-10)) //--->return positive value 
// console.log(Math.trunc(Math.random() *100)) //-->it will return randome form 0 - 1 (exclusive) and after * 100 it will return 0-100(exclusive)
let min = 50;
let max = 100;
console.log(Math.trunc(Math.random()*(max-min)+min));
