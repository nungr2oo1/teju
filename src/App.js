import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ContactUs from './components/ContactUs.js';

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
