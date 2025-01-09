// ---------------------------setTimeOut 
// function change(){
//     setTimeout(func,2000)
// }
// function func(){
//     alert("setting time out");
// }
// ---------------------------setInterval
// function add(){
//     setInterval(func2,1000);
// }

// function func2(){
//     document.getElementById("demo").innerHTML +="Hello";
// }
// ---------------------------------------
function timeInterval(){
    setInterval(date1,1000);
}
function date1(){
    var myDate = new Date();
    var myTime = myDate.toLocaleTimeString();
    document.getElementById("demo1").innerHTML = myTime;
}

function dateInterval(){
    setInterval(date2,1000);
}
function date2(){
    var myDate = new Date();
    var myTime = myDate.toLocaleDateString();
    document.getElementById("demo2").innerHTML = myTime;
}