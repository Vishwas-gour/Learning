import Table from "./Table";
import Form from "./Form.jsx"

let table = Table.map((key) => {
  return (
    <tr>
      <td>{key.no}</td>
      <td>{key.name}</td>
      <td>{key.Dept}</td>
      <td>{key.salary}</td>
    </tr>
  )
})


let form = Form.map((key) => {
  return (
    <>
      <form>
        First Name : <input type="text" value={key.fName} />
        Last Name : <input type="text" value={key.lName} />
        Phone No. : <input type="number" value={key.no} />
        Gmail : <input type="gmail" value={key.gmail} />
      </form>
      <hr />
    </>
  )
})

function App() {
  return (
    <>
      <h1>Table</h1>
      <table>
        {table}
      </table>
      <h1>Form</h1>

      {form}
    </>
  )
}


export default App;
