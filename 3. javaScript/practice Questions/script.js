let part = "======================"

// ============================Q:-1
// console.log("Q:- 1" + part)
// let name = "Vishwas";

// if (name == "") {
//     console.log("empty");
// }
// else {
//     console.log("not empty")
// }

// ============================Q:-2
// console.log("Q:- 2"+part);
// let l = parseInt(prompt("enter Length"));
// let w = parseInt(prompt("enter Width"));
// let rect = l*w;
// console.log(rect);

// ============================Q:-3
// console.log("Q:- 3" + part);
// let str1= "vishwas gour";
// let capArray = str1.split(" ");
// console.log(capArray);
// for(let i = 0; i<capArray.length; i++){
//     let temp = capArray[i];
//     temp = temp[0].toUpperCase() + temp.substring(1); 
//     capArray[i] = temp;
// } 
// console.log(capArray)

// ============================Q:-4
// console.log("Q:- 4" + part);

// let a = 12;
// if (a >= 0) {
//     console.log(` ${a} is positive`);
// }
// else {
//     console.log(` ${a} is negetive`)
// }


// ============================Q:-5
// console.log("Q:- 5" + part);
// let no1 = 112;
// let no2 = 45;
// let no3 = 98;
// if(no1 > no2 && no1 > no3){
//     console.log(`${no1} is the greater of ${no2} ${no3}`)
// }
// else if(no2 > no1 && no2 > no3){
//     console.log(`${no2} is the greater of ${no1} ${no3}`)
// }
// else{
//     console.log(`${no3} is the greater of ${no2} ${no1}`)
// }



// ============================Q:-6
// console.log("Q:- 6" + part);
// let n = 10;
// let first = 0;
// let second = 1; 
// while(first<=n){
//     console.log(first);
//     let next = first+second;
//     first = second; 
//     second = next; 
// }


// ============================Q:-8
// console.log("Q:- 8" + part);

// let pattern = document.querySelector("#pattern");
// let n = 4;
// for (let row = 1; row <= 4; row++) {
//     for (let col = 1; col <= n - row + 1; col++) {
//         pattern.innerHTML += n - col + 1 + " ";
//     }
//     pattern.innerHTML += " <br>";
// }

// |||||||||||||||||||||<- NEXT-PART ->||||||||||||||||||||||||||

// ============================Q:-1
// console.log("Q:- 1" + part);

// let date = new Date();
// let currDay = date.getDay;
// let currTime = date.toLocaleTimeString(); 
// if(date.getDay() == 0) currDay = "Sunady";
// if(date.getDay() == 1) currDay = "Monday";
// if(date.getDay() == 2) currDay = "Tuesday";
// if(date.getDay() == 3) currDay = "Wednesday";
// if(date.getDay() == 4) currDay = "Thursday";
// if(date.getDay() == 5) currDay = "Friday";
// if(date.getDay() == 6) currDay = "Saturday";
// console.log(`it's ${currDay} today `);
// console.log(currTime);


// ============================Q:-2
// console.log("Q:- 2" + part);

// let maths = document.querySelector("#maths");
// maths.value = prompt("maths marks");
// let english = document.querySelector("#english");
// english.value = prompt("english marks");
// let hindi = document.querySelector("#hindi");
// hindi.value = prompt("hindi marks");
// let java = document.querySelector("#java");
// java.value = prompt("java marks");
// let submit = document.querySelector("#submit");
// let per = document.querySelector("#per");
// let total = +maths.value + +english.value + +hindi.value + +java.value;
// console.log(total)
// let formula = ((total * 100) / 400);
// per.value = formula;



// ============================Q:-3
// console.log("Q:- 3" + part);

// let tableNumb = 2;
// for(let i = 1; i<=10; i++){
//   console.log(`${tableNumb} x ${i} = ${tableNumb * i}`)  
// }

// ============================Q:-4
// console.log("Q:- 4" + part);

// let numb = 123;
// let rev  =  0;
// while(numb > 0){
//     let mod = numb%10;
//     rev = rev * 10 + mod;
//     numb = Math.trunc(numb/10);
// }
// console.log(rev);



// ============================Q:-5
// console.log("Q:- 5" + part);

// let contant = document.querySelector("h1");
// console.log(contant);
// let btn = document.getElementById("change");

// btn.addEventListener("click", function(){
//     contant.style.color = "red";
// });


// ============================Q:-6
// console.log("Q:- 6" + part);

// let node = document.querySelector("#interval")
// console.log(node)
// let a = 1;
// let setint = setInterval(increaseSec,1000);

// function increaseSec(){
//     node.innerHTML = a++;
//     // if(a == 3){
//     //     clearInterval(setint)
//     // } 
// }


// ============================Q:-7
// console.log("Q:- 7" + part);

// let findMax = [5, 77, 24, 5, 3, 3];
// let max = 0;
// for (let a of findMax) {
//     if(a>max){
//         max = a;
//     }
// }
// console.log(max);


// ============================Q:-8
// console.log("Q:- 8" + part);

let password = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()-_=+[]{}|;:'",.<>?/~`
let randm =""; 
for(let i = 1; i<=8; i++){
    let temp= Math.trunc(Math.random() * password.length) 
    randm += ""+password[temp]
}
console.log(randm);
