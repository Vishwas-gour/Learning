function validation() {
    // let name = document.getElementById("name").value;
    // let age = document.getElementById("age").value;
    // let email = document.getElementById("email").value;
    // let password = document.getElementById("password").value;
    // let confirm = document.getElementById("confirm").value;

    // if (name == "" || age == "" || email == "" || password == "" || confirm == "") {
    //     alert("fields not be empty")
    //     return false;
    // }

    let inputs = document.querySelectorAll("input");
    console.log(inputs);
    for (let input of inputs) {
        if (input.value == "") {
            alert("fields not be empty")
            return false;
        }
    }
    return false;
}