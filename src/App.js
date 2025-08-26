import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Component from "./Components/Header";
import Footer from "./Components/Footer";
import Inici from "./Pages/Inici";

function App() {
  return (
      <div>
        <Component/>
          <Inici/>
        <Footer/>
      </div>


  );

}


export default App;
