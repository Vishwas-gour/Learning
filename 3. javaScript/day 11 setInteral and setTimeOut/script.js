// ==================== <- INTERVALS ->

// display function
function display() {
    document.getElementById("d1").innerHTML += "Helloo";
}

// ------> setInterval 
// call continuesly after 500 ms
let SetInterval = setInterval(display, 500);

function ClearInterval() {
    //clearInterval
    clearInterval(SetInterval)
}

// setTimeout
function display1() {
    document.getElementById("d2").innerHTML = "Vishwas";
}

let SetTimeout = setTimeout(display1, 3000);
function ClearTimeout() {
    // ------>  clearTimeout --> call before 3000ms
    clearTimeout(SetTimeout)
}


let d3 = document.getElementById("d3");
function temp() {
    setInterval(showTime, 100);
}
function showTime() {
    let date = new Date();
    d3.innerHTML = date.toLocaleTimeString();
}