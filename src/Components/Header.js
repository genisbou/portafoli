import React from 'react';
import '../styles/styles.css';
import {useTranslation} from "react-i18next";


const NavigationBar = () => {
    const [t, i18n] = useTranslation("global");
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
                            <a className="nav-link active" aria-current="page" href="inici">{t('header.home')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="sobre-mi">{t('header.aboutMe')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contacte">{t('header.contact')}</a>
                        </li>
                    </ul>
                    <div className="dropdown" style={{marginRight : "20px"}}>
                        <button className="btn btn-light dropdown-toggle" type="button" id="dropdownLang" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-globe"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownLang">
                            <li>
                                <a className="dropdown-item" href="#" onClick={() => i18n.changeLanguage("ca")}>
                                    Català
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#" onClick={() => i18n.changeLanguage("es")}>
                                    Español
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#" onClick={() => i18n.changeLanguage("en")}>
                                    English
                                </a>
                            </li>
                        </ul>
                    </div>

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