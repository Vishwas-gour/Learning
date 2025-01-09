// Simple function call
function sum(x, y) {
    return x + y;
}
let output = sum(2, 3);
output = sum(876, 4008);
console.log(output);

// =======================< FUNCTION >=============================
// -------------- 1->regular function --------------
function multi(x, y, z) {
    return x * y * z;
}

// -------------- 2->function expression --------------
const add = function (x, y, z) {
    return x + y + z;
};

console.log(multi(4, 2, 3));
console.log(add(1, 2, 3));

// --------------3 -> Arrow function --------------
const arrow = (a, b, c) => {
    return a * b * c;
};


console.log(arrow(10, 20, 30))
const additon = (i, j, k) => i + j + k;
console.log(additon(9, 9, 9));

// =======================< OBJECT-CREATION >=======================
const person1 = {
    firstName: "Vishwas",
    lastName: "Gour",
    age: 21,
    //-------OBJECT INSIDE OBJECT
    state: {
        distict: "Darbhanga",
    },
    //-------FUNCTION INSIDE OBJECT
    fullName: function () {
        return this.firstName + " " + this.lastName + " " + this.age;
    }
};
let myname2 = person1.fullName();
console.log(myname2);
document.getElementById("class").innerHTML = "My name is " + person1.firstName; // add in html tag