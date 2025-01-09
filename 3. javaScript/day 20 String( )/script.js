let name = "Vishwas Gour   ";
console.log(name);
console.log("trim remove post ans pre spaces--> "+name.trim())
let a = name.charAt(2);
let b = name.at(2); //---> return UTF-8 code value
console.log(a,b)   // ---> return index value
console.log(name.charCodeAt(0)); //-->return ascii - value
console.log(name.slice(0,3)) // --> subString for 0-3 index;
console.log(name.slice(-10,-1)); // --> we can also give -ve value and -ve take from last
console.log(name.substring(1,5));// --> similar  
console.log(name.substr(0,4)) //--->it return number of char from 0 
console.log(name.indexOf("s")) // --> it will return first occurance of "wa"   
console.log(name.indexOf("s",3)) // --> take after 3rd index   
let str = "Lorem ipsum, dolor sit lorem Aonsectetur Lorem elit.";
console.log(name.search(/A/));

 //----> also take not case sensetive (i)  and (g) all similar words and return array 
 let temp = str.match(/lorem/i)  
console.log(temp);
console.log(str.match(/Lorem/g));
console.log(str.match(/Lorem/ig));
console.log(str.replace("dolor","Com")) //--> if you want to replace all than use (g) for case-not-sensetive (i)
console.log(str.replaceAll(/Lorem/gi, "RAHUL"))

let str2 = "Lorem ipsum, dolor sit lorem consectetur Lorem elit.";
console.log(str2.split(" "))