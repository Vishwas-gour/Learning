const person = {
    name1: "vishwas",
    name2: "gour"
};

const display = () => {
    document.getElementById("demo").innerHTML = person.name1 + " " + person.name2;
};

display();
