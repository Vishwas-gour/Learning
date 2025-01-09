function display1(){
    document.getElementById("demo1").innerHTML = "by HTML";
}

let bt = document.getElementById("btn");
bt.addEventListener("click" , display2);
bt.addEventListener("mouseover" , display3);
function display2(){
    document.getElementById("demo1").innerHTML = "by click";
}
function display3(){
    document.getElementById("demo1").innerHTML = "by mouseover";
}

// remove eventListener only work for seprate funtion -------------------------
bt.removeEventListener("mouseover",display3)

// -------------------------------------------------------
let name ="Vishwas";
let age =21;
let bt3 = document.getElementById("btn3");
bt3.addEventListener("click" , display4);
function display4(){
    document.getElementById("demo1").innerHTML = `my name is ${name} my age ${age}`;
}