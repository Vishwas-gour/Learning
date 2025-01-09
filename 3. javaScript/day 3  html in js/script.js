// block (local) and global variable
let a = 10;
var b = 11;
const c = 12;
{
    let d = 10;
    var e = 11;
    const f = 12;
}
console.log(a);
console.log(b);
console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);


//  ==(valur) , ===(value + datatype)

let g = 90;
let h = "90";
if (g == h) {
    console.log("equal");
}
else {
    console.log("not equal");

}

if (g === h) {
    console.log("equal");
}
else {
    console.log("not equal");

}

// 
document.getElementById("demo").innerHTML="hello vishwas";
document.getElementById("demo").style.color = "green";