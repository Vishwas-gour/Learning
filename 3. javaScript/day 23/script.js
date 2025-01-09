let table = document.querySelector(".table");
let sno = [1, 2, 3, 4];
let name = ["Vishu", "Hema", "Om", "Ritik"];
let roll = [Math.random() * 100 + 1, Math.random() * 100 + 1, Math.random() * 100 + 1, Math.random() * 100 + 1];
let add = ["Bhoapl", "Sehore", "Dehli", "Pune"];

let n = sno.length;

for (let i = 0; i < n; i++) {
    
    table.innerHTML += `<tr>
    <td>${sno[i]}</td>
    <td>${name[i]}</td>
    <td>${roll[i]}</td>
    <td>${add[i]}</td>
</tr>
`
}

