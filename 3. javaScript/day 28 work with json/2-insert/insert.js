let data = document.querySelector(".submit");
data.addEventListener("click", async (e) => {
  e.preventDefault();
    let id = document.querySelector("#id").value;
    let name = document.querySelector("#name").value;
    let city = document.querySelector("#city").value;
    let salary = document.querySelector("#salary").value;
    let url = "http://localhost:3000/employee";
    //------------>POST
    try{
        let resposnse = await fetch(url,{
            method:"POST",
            body:JSON.stringify({
                id:id,
                name:name,
                city:city,
                salary:salary
            }),
            headers:{
                "Contact-Type":"application/json; charset=UTF-8",
            },
        });
        console.log(resposnse);
        let value = await resposnse.json();
        console.log(value);
        alert("Data has sended");
    }catch(error){
        console.log(error);
        alert("somthing went wrong")
    }
});