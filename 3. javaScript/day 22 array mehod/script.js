// =============<- REMOVE-ADD ->=================
const names = ["Sahil", "Himanshu", "Vishwas", "Om", "Ritik"];
const numb = [4, 43, 3, 54, 3, 2, 23];
console.log("isArray -> " + Array.isArray(names));
const newArr = names.toString();
console.log("toString -> " + newArr);
//---->JOIN :- convert array to string with sepraters
const joinArr = names.join("-");
console.log("join -> " + joinArr);

// Array sort
console.log(names.sort()); //--> sort by ascii value
console.log(names.reverse());

// ====<- form last index ->===============
let pop = names.pop();   // -->remove elments from last and return that
console.log(names);
let push = names.push("yash");  // -->add elments to last and return length
console.log(names);
// ====<- form 0'th index->===============
let shift = names.shift("prakash");  // --> remove elments from first and return
console.log(names);
let unshift = names.unshift("iuh");  // --> add elments from first and return length
console.log(names);
console.log(names.concat(numb));

// ================<-SPLICE->=======================
let name2 = ["Sahil", "Himanshu", "Vishwas", "Om", "Ritik"];
console.log(name2)
// index,number of delete,add
// splice return the removed value
let spliceArr = name2.splice(1, 1, "10", "10");
console.log("=====",name2) //===>


// ================<-FOR-NUMBER-SORT->=======================

const numb1 = [4, 43, 3, 54, 3, 2, 23];

const numb2 =numb1.sort(function (a, b) {
   return b-a;
});
console.log(numb2);