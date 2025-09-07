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

function App() {
  return (
      <Router>
                <Routes>
                    <Route exact path="/inici" element={<Inici />} />
                </Routes>
      </Router>


  );

}


export default App;
