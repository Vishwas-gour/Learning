let demo = document.getElementById("demo");
let btn = document.getElementById("btn");
btn.addEventListener("click", style);
function style() {
    let demoStyle = demo.style;
    demoStyle.color = "white";
    demoStyle.backgroundColor = "black";
    demoStyle.fontSize = "30px";
    demoStyle.padding = "20px";
    demoStyle.border = "10px dotted gray"
}


// -------------->QUEARY SELECTORE
//________target only top of the element
// ----> select by id
let idPara = document.querySelector("#idPara");
idPara.style.color = "red";
// ----> select by class
let classPara = document.querySelector(".classPara");
classPara.style.color = "blue";
// ----> select by attribute
let attribute = document.querySelector("a[target=_blank");
attribute.style.color = "magenta"
// ----> select by querySelector
// ______ querySelectorAll create nodeList and we will apply style on that by index
let selectAll = document.querySelectorAll("h1");
console.log(selectAll); // ->check in cosole
selectAll[0].style.color = "red";
selectAll[1].style.color = "green";
selectAll[2].style.color = "blue";
selectAll[3].style.color = "brown";
selectAll[4].style.color = "purple";
