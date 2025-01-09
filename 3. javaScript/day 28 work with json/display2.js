async function showData() {
    let tableID = document.querySelector("#table");
    console.log(tableID)
    let tab = `<table border = "1px" bgcolor = "yellow"  width ="60px>
    <tr  bgcolor = "yellow" >
    <th>no</th>
    <th>name</th>
    <th>city</th>
    <th>salary</th>
    </tr>`;
    let url = "http://localhost:3000/employee";
    let file = await fetch(url);
    let data = await file.json();
    data.map((key) => {
        tab += `
        <tr>
           <td>${key.id}</td>
           <td>${key.name}</td>
           <td>${key.city}</td>
           <td>${key.salary}</td>
        </tr> `
    })
    tab += `</table>`;
    tableID.innerHTML += tab;
}
showData();