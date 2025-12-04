import React from 'react';
import '../styles/styles.css'
import {useTranslation} from "react-i18next";

const Footer = () => {
    const [t, i18n] = useTranslation("global");
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
                            <li><a href="inici">{t('footer.home')}</a></li>
                            <li><a href="sobre-mi">{t('footer.aboutMe')}</a></li>
                            <li><a href="contacte">{t('footer.contact')}</a></li>

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