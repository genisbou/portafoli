import React, { useEffect } from 'react';
import '../styles/styles.css';
import { useTranslation } from "react-i18next";
import routesPath from "../routesPath";
import {Link, useNavigate} from "react-router-dom";
import { NavLink } from "react-router-dom";



const NavigationBar = () => {
    const [t, i18n] = useTranslation("global");
    const navigate = useNavigate();

    // Manté l'idioma seleccionat al refrescar
    useEffect(() => {
        // idioma per defecte
        let lang = "ca";

        // primer mirem la URL
        const urlLang = window.location.pathname.split("/")[1];
        if (["ca", "es", "en"].includes(urlLang)) {
            lang = urlLang;
        } else {
            // si la URL no té idioma, mirem localStorage
            lang = localStorage.getItem("lang") || "ca";
        }

        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);
    }, [i18n]);

    const lang =  localStorage.getItem("lang") || "ca";
    const url = window.location.pathname.split("/");


    const changeLanguage = (lng) => {
        const pathParts = window.location.pathname.split("/").filter(Boolean);
        // pathParts = ["portafoli","ca","inici"]

        const oldLang = pathParts[1] || "ca";
        const currentRouteName = pathParts[2] || routesPath[oldLang].home;

        let routeKeyFound = "home";
        if (routesPath[oldLang]) {
            Object.keys(routesPath[oldLang]).forEach((key) => {
                if (routesPath[oldLang][key] === currentRouteName) {
                    routeKeyFound = key;
                }
            });
        }

        i18n.changeLanguage(lng);
        localStorage.setItem("lang", lng);

        if (routesPath[lng]) {
            const newPath = "/" + lng + "/" + routesPath[lng][routeKeyFound];
            navigate(newPath, { replace: true });
        }
    };



    return (

        <nav className="navbar navbar-expand-lg bg-light justify-content-center fixed-top">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link " to={ "/" + lang + "/" + routesPath[lang].home}

                            end>
                                {t('header.home')}
                            </NavLink>

                        </li>
                        <NavLink className="nav-link" to={ "/" + lang + "/" + routesPath[lang].about}>
                            {t('header.aboutMe')}
                        </NavLink>

                        <li className="nav-item">
                            <NavLink className="nav-link" to={ "/" +   lang + "/" + routesPath[lang].contact}>
                                {t('header.contact')}
                            </NavLink>

                        </li>
                    </ul>


                    <div className="dropdown" style={{marginRight : "20px"}}>
                        <button className="btn btn-light dropdown-toggle" type="button" id="dropdownLang" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-globe"></i>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownLang">
                            <li>
                                <a className="dropdown-item" href="" onClick={(e) => { e.preventDefault(); changeLanguage("ca"); }}>
                                    Català
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="" onClick={(e) => { e.preventDefault(); changeLanguage("es"); }}>
                                    Español
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="" onClick={(e) => { e.preventDefault(); changeLanguage("en"); }}>
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