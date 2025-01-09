let code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()";
let field = document.getElementById("field");
let button = document.getElementById("button");

button.addEventListener("click", function () {
    let password = " ";
    for (let i = 0; i < 8; i++) {
       let index = Math.trunc(Math.random()*code.length);
       password += code[index];
    }
    field.innerHTML =password;
});

