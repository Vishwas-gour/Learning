// Promise is a object in js
// fetch() method starts the perocess of fetching resource from a server
// fetch() returns promise that resolve to a response object
// async => makes a function to return Promicez
// awiat => write insede only async
// async keyword transform a regural js function, causing it to return a Promise
// await keyword is used inside an async function to pause its exucution and wait for a Promise to resolve before contunuing.
const getdata = async () => {
    return 10;
}

console.log(getdata()); // ---> RETURN PROMISE
getdata().then((val) => { // ---> CONVERT RETURN PROMISE INTO  VALUE
console.log(val);
});

const getdata1 = async () => {
    let any = await "hello";
    console.log(any);
}
getdata1();