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
        <Router basename="/portafoli">
            <Routes>
                {/* Català */}
                <Route path="/" element={<Inici />} />
                <Route path="/ca" element={<Inici />} />
                <Route path="/ca/sobre-mi" element={<SobreMi />} />
                <Route path="/ca/contacte" element={<Contacte />} />

                {/* Castellà */}
                <Route path="/es/inicio" element={<Inici />} />
                <Route path="/es/sobre-mi" element={<SobreMi />} />
                <Route path="/es/contacto" element={<Contacte />} />

                {/* Anglès */}
                <Route path="/en/home" element={<Inici />} />
                <Route path="/en/about-me" element={<SobreMi />} />
                <Route path="/en/contact" element={<Contacte />} />

                {/* Fallback */}
                <Route path="*" element={<Inici />} />
            </Routes>
        </Router>



    );

}


export default App;
