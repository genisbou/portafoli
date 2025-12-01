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

function App() {
  return (
      <Router>
                <Routes>
                    <Route exact path="/inici" element={<Inici />} />
                    <Route exact path="/contacte" element={<Contacte />} />
                    <Route exact path="/sobre-mi" element={<SobreMi />} />
                </Routes>
      </Router>


  );

}


export default App;
