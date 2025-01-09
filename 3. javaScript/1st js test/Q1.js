let demo1 = document.getElementById("demo1");
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function(){
    demo1.innerHTML = "yes is changed"
    demo1.style.color = "white";
    demo1.style.backgroundColor = "black";
})