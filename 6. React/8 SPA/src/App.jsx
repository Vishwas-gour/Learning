import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeLayout from './HomeLayout';
import Home from './Home';

import About from './About';

import Contact from './Contact';
import Servise from './Servise';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='contact' element={<Contact />} />
            <Route path='about' element={<About />} />
            <Route path='service' element={<Servise />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}
export default App;