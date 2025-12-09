import React, {useEffect} from 'react';
import '../styles/styles.css'
import {useTranslation} from "react-i18next";
import routesPath from "../routesPath";

const Footer = () => {
    const [t, i18n] = useTranslation("global");

    // Manté l'idioma seleccionat al refrescar
    useEffect(() => {
        const lang = localStorage.getItem("lang") || "ca"; // català per defecte
        i18n.changeLanguage(lang);
    }, [i18n]);


    const lang =  localStorage.getItem("lang") || "ca";
    const url = window.location.pathname.split("/");
    console.log(url[2]);

    const changeLanguage = (lng) => {
        const pathParts = window.location.pathname.split("/");
        const oldLang = pathParts[1] || "ca";
        const currentRouteName = pathParts[2] || routesPath[oldLang].home;

        let routeKeyFound = "home";
        if (routesPath[oldLang]) {
            const keys = Object.keys(routesPath[oldLang]);
            keys.forEach((key) => {
                if (routesPath[oldLang][key] === currentRouteName) {
                    routeKeyFound = key;
                }
            });
        }

        i18n.changeLanguage(lng);
        localStorage.setItem("lang", lng);

        if (routesPath[lng]) {
            const newPath = "/" + lng + "/" + routesPath[lng][routeKeyFound];
            window.location.pathname = newPath;
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="footer-brand">Genís Bou Majós</div>
                        <p className="footer-text">{t('footer.text')}</p>
                        <div className="social-links">
                           <a href="https://github.com/genisbou" className="social-link"><i className="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/gen%C3%ADs-bou-maj%C3%B3s/" className="social-link"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>

                    <div className="col-md-6 text-md-end">
                        <ul className="footer-links">
                            <li>
                                <a className="nav-link active" href={"/" + lang + "/" + routesPath[lang].home}>
                                    {t('footer.home')}
                                </a>
                            </li>
                            <li>
                                <a className="nav-link active" href={"/" + lang + "/" + routesPath[lang].about}>
                                    {t('footer.aboutMe')}
                                </a>
                            </li>
                            <li>
                                <a className="nav-link active" href={"/" + lang + "/" + routesPath[lang].contact}>
                                    {t('footer.contact')}
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className="copyright text-center">
                    © 2025 Genís Bou Majós. {t('footer.copy')}
                </div>
            </div>
        </footer>
    );
}

export default Footer;