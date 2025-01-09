// # variable
//   let, var, const
//   let -> can,t assing before declairation
//   var -> can assing before declairation , can  re-declairation
//   const ->  assign at the time of declairation

        // E.S. 6 -> let & const   introduce in 2015


// # nameing convantion
//    -> can't start with inumber
//    -> contain -> letter, number, _, $-


// # data types
//    1. -> primitive
//    2. -> not-primitive
// 1.1 -> 1.string, 2.number, 3.boolean, 4.null, 5.undefined, 6.bigInt, 7.symbol    
let a = "string";
let b = 1;
let c = false;
let d = null;
let e = undefined;
//   or
let ee; // undefined
let f = 12345678765432123456765432n; //big int
let g;
let h= Symbol("id")
console.log("string ->", e, "data type ->", typeof e);

// object
const obj ={
    name:"vishwas",
    class: "javafullStack",
    age : 4,
    voter : true
};

console.log(obj,typeof obj);

func();
//  function
function func(){
console.log(" this is function");
}
// 3 types of non-primitive :- array , object, function