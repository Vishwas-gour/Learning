import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeLayout from './HomeLayout';
import Home from './Home';
import ServiseLayout from "./Service-page/ServiseLayout"
import About from './About';
import OurServise from './Service-page/OurServises';
import Oprations from './Service-page/Oprations';
import HealthCare from './Service-page/HealthCare';
import ContactLayout from './Contact-page/ContactLayout';
import ContactInfo from './Contact-page/ContactInfo';
import Feedback from './Contact-page/Feedback';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='contact' element={<ContactLayout />} >
              <Route index element={<ContactInfo />} />
              <Route path="contactInfo" element={<ContactInfo />} />
              <Route path="feedback" element={<Feedback />} />
            </Route>
            <Route path='about' element={<About />} />
            <Route path='service' element={<ServiseLayout />} >
              <Route index element={<OurServise />} />
              <Route path="ourServises" element={<OurServise />} />
              <Route path="healthCare" element={<HealthCare />} />
              <Route path="oprations" element={<Oprations />} />
              <Route path="oprations" element={<Oprations />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}
export default App;