import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactLayout from "./Contact-page/ContactLayout";
import ContectHome from "./Contact-page/ContectHome";
import ContactInfo from "./Contact-page/ContactInfo";
import Feedback from "./Contact-page/Feedback";
function Contact() {
  return (
    <>
      <h1>hello</h1>
      <Router>
        <Routes >
          <Route path="/"  element={<ContactLayout />}>
            <Route index element={<ContectHome />} />
            <Route path="contactInfo" element={<ContactInfo />} />
            <Route path="feedback" element={<Feedback />} />
          </Route>
        </Routes>
      </Router>
      </>
  )
}
export default Contact;