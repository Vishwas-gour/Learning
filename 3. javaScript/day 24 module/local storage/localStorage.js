// set data in local storage
localStorage.setItem("name","Vishwas Gour");
localStorage.setItem("age",21);
localStorage.setItem("class",12);

// get/read data in local storage
let name = localStorage.getItem("name");
let age = localStorage.getItem("age");1
// let class = localStorage.getItem("class");
console.log(name,age);

// REMOVE
localStorage.removeItem("name")
//  CLEAR
localStorage.clear();