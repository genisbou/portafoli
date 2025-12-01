import React from 'react';
import '../styles/styles.css';


const NavigationBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light justify-content-center ">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="inici">INICI</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="sobre-mi">SOBRE MI</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contacte">CONTACTE</a>
                        </li>
                    </ul>
                    <div className="social-links">
                        <a href="https://github.com/genisbou" className="social-link"><i className="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/gen%C3%ADs-bou-maj%C3%B3s/" className="social-link"><i className="fab fa-linkedin"></i></a>
                    </div>



                </div>
            </div>
        </nav>
    );
}

export default NavigationBar;