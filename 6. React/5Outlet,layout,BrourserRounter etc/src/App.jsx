import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Contact from "./Contact";
import Home from "./Home";
import About from "./About"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;