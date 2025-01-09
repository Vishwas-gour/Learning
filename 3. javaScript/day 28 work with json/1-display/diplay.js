let tab = document.getElementById("table");
async function dataShow() { 
    let table = ` <table border = "1px"  width ="60px" bgcolor="yellow">
    <tr bgcolor = "yellow">
    <th>no</th>
    <th>name</th>
    <th>city</th>
    <th>salary</th>
    </tr>`;
    // url of the seerver to fetch data
    let url = "http://localhost:3000/employee";//--> here we select employee array
    // get data
    let myobj = await fetch(url);
    console.log(myobj);
    // concerting response object to json object(array of object)
    let data = await myobj.json(); // data is json(Array of object)
    console.log(data);
    data.map((key)=>{
        table += `<tr>
            <td>${key.id}</td>
            <td>${key.name}</td>
            <td>${key.city}</td>
            <td>${key.salary}</td>
        </tr>
        `
    })
    table +=`</table>`
    tab.innerHTML += table;
}
dataShow();