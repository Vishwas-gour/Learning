import Cybrom from "./Cybrom";
// ---> Passing By Object  
// function App() {
//   const student = {
//     name: "Vishwas",
//     designation: "Engineer",
//     city: "Bhopal",
//   }
//   return (
//     <>
//       {/* this will pass as a object */}
//       <Cybrom name={student.name} city={student.city} salary="1000"
//         designation={student.designation} />
//     </>
//   )
// }

const student = [
  {
    name: "Vishwas",
    designation: "Engineer",
    city: "Bhopal",
    salary: "9000"
  },
  {
    name: "Om",
    designation: "Agriculture",
    city: "Indore",
    salary: "1000"
  },
  {
    name: "Ritik",
    designation: "Pharmacy",
    city: "Sehore",
    salary: "2000"
  },
  {
    name: "Hari",
    designation: "Busines",
    city: "Ujjain",
    salary: "6000"
  },
  {
    name: "hema",
    designation: "Law",
    city: "Raisen",
    salary: "9000"
  }
];


let ans = student.map((key) => <Cybrom name={key.name} city={key.city} salary={key.salary}
  designation={key.designation} />)
function App() {
  return (
    <>
      {ans}
    </>
  )
}


export default App;
