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
                            <a className="nav-link active" aria-current="page" href="#">INICI</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">SOBRE MI</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">CONTACTE</a>
                        </li>
                    </ul>
                    <i className="bi bi-linkedin ms-3"></i>
                    <i className="bi bi-github ms-3"></i>
                </div>
            </div>
        </nav>
    );
}

export default NavigationBar;