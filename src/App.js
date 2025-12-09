import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Routes, Route
} from "react-router-dom";

import Component from "./Components/Header";
import Footer from "./Components/Footer";
import Inici from "./Pages/Inici";
import Contacte from "./Pages/Contacte";
import SobreMi from "./Pages/SobreMi";

const lang =  localStorage.getItem("lang") || "ca";

function App() {
  return (
      <Router>
          <Routes>


              {/* Català */}
              <Route path="/portafoli/" element={<Inici />} />
              <Route path="/portafoli/ca/" element={<Inici />} />
              <Route path="/portafoli/ca/sobre-mi" element={<SobreMi />} />
              <Route path="/portafoli/ca/contacte" element={<Contacte />} />

              {/* Castellà */}
              <Route path="/portafolio/es/inicio" element={<Inici />} />
              <Route path="/portafolio/es/sobre-mi" element={<SobreMi />} />
              <Route path="/portafolio/es/contacto" element={<Contacte />} />

              {/* Anglès */}
              <Route path="/portfolio/en/home" element={<Inici />} />
              <Route path="/portfolio/en/about" element={<SobreMi />} />
              <Route path="/portfolio/en/contact" element={<Contacte />} />
          </Routes>

      </Router>


  );

}


export default App;
