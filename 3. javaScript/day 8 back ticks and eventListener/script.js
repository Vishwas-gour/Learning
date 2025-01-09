let name = "Vishwas Gour";
let age = 21;
data = `my name is ${name}
my age is ${age}`;
console.log(data);

// ==============<- BACK TICKS/TEMPLATE LITERALS (``) ->===============
let demo1 = document.getElementById("demo1");
const displayDetail = (name, age) => {
    output = `my name is ${this.name} 
    my age is ${this.age}`;
    return output;
}
data2 = displayDetail("Vishwas", 21);
demo1.innerHTML = data;

// ----------->
let price = 10;
let vat = 0.25;
// .toFixed return fixed value if(0) return 1 digit if(1) return 2 digit etc.....
let total = `total: ${(price * (1 + vat).toFixed(2))} `;
console.log(total);

// ==============<-   EVENT-LISTENERS ->===============

let button = document.getElementById("btn");
button.addEventListener("click", function () {
    alert("click event succesfull");
});

button.addEventListener("mouseleave", function () {
    document.getElementById("demo2").innerHTML = "Hello"
})

