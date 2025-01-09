let input = document.getElementById("input");
let h1=document.getElementById("h1");
h1.style.padding="10px"
function takeInput() {
    h1.innerHTML = input.value;
}
function style1() {
    h1.style.color= "blue";
    h1.style.backgroundColor="black";
    h1.style.fontSize= "30px";
    h1.style.textAlign="center";
}

function style2() {
    h1.style.color= "pink";
    h1.style.backgroundColor="gray";
    h1.style.fontSize= "30px";
    h1.style.textAlign="center";
}


function style3() {
    h1.style.color= "black";
    h1.style.backgroundColor="gray;"
    h1.style.fontSize= "30px";
    h1.style.textAlign="center";
}
