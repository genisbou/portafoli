import React from 'react';
import '../styles/styles.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="footer-brand">Genís Bou Majós</div>
                        <p className="footer-text">Creating amazing experiences and innovative solutions for our
                            customers
                            worldwide.</p>
                        <div className="social-links">
                            <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="social-link"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>

                    <div className="col-md-6 text-md-end">
                        <ul className="footer-links">
                            <li><a href="#">Inici</a></li>
                            <li><a href="#">Sobre mi</a></li>
                            <li><a href="#">Contacte</a></li>
                            
                        </ul>
                    </div>
                </div>

                <div className="copyright text-center">
                    © 2025 Genís Bou Majós. Tots els drets reservats.
                </div>
            </div>
        </footer>
    );
}

export default Footer;