// year,month,data,hour,min,sec,mili
var d = new Date(2014, 11, 2, 15, 42, 43, 10);
console.log(d.toUTCString())
console.log(d.toISOString());
let demo = document.getElementById("demo").innerHTML = d;
d = new Date(2014, 11, 23, 13, 45, 43);
console.log(d)
demo = d;
d = new Date(2014, 11, 23, 13, 45);
console.log(d)
demo = d;
d = new Date(2014, 11, 23, 13);
console.log(d)
demo == d;
d = new Date(2014, 11, 23);
console.log(d)
demo = d;
d = new Date(2014, 11);
demo = d;
console.log(d)
d = new Date(2014);
demo = d;
console.log(d)

d = new Date(365*24*60*60*1000);
demo = d;
console.log(d)

// use by get ----> fullyear.month,day.date,gour,minuts,second   getDay



console.log(Date.parse(d)) //--> convert to int