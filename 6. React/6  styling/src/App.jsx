
function App() {

  const style = {

    height: "100px",
    width: "500px"

  }
  return (
    <>
      {/* =====================================<- INLINE FAMILY ->============================================= */}
      {/* <div style={{ borderRadius: "10px", border: "4px solid red", width: "40vw", height: "280px", padding: "2rem", background: "pink", margin: "auto" }}>
        <div style={{ borderRadius: "10px", border: "4px solid blue", height: "200px", padding: "2rem", background: "blue" }}>
          <div style={{ borderRadius: "10px", border: "4px solid purple", height: "100px", padding: "2rem", background: "green" }}>
            <h1 style={{ textAlign: "center", color: "red" }}>Cybrom</h1>
          </div>
        </div>
      </div> */}
      <br />
      {/* =====================================<- INLINE FAMILY ->============================================= */}
      <div style={style}>
        Lorem, ipsum dolor sit amet consectetur adipisicing
      </div>
    </>
  )
}
export default App;
