function display1() {
    console.log("Hello ma'am")
}

const display2 = function () {
    alert("hellMa'am")
}
const display3 = () => {
    alert("hellMa'am")
}
const firstName = "Vishwas";
const lastName = "Gour";

const display4 = () => {
    console.log("my name is", firstName, lastName)
}



const cube = (a) => {
    return a * a * a;
}
const display5 = () => {
    let btn =  document.getElementById("d1").innerHTML = cube;
}


