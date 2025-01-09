let url = "http://localhost:3000/employee";
let obj = fetch(url,{
    method : "POST",
    body:JSON.stringify({
      "id": "4",
      "name": "vishwas",
      "city": "Bhopal",
      "salary": 70000
    }),
    headers:{
        "Contect-Type":"application/json; charset = UTF-8"
    }
})
console.log(obj)