import React from 'react';
import '../styles/styles.css'
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Inici = () => {
    return (
        <>
            <Header/>

            <div className="container">

                <h3>Contacta amb mi </h3>
                <p>Si tens qualsevol dubte, proposta o oportunitat laboral, estaré encantat de parlar-ne. Pots escriure’m directament o utilitzar el formulari.
                </p>
                <div className="row">
                    <div className="col-sm-6">

                        <div className="card">

                            <div className="card-body">
                                <h5 className="card-title">Dades de contacte</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <i className="bi bi-telephone me-2"></i>
                                        +34 640 785 184
                                    </li>
                                    <li className="list-group-item">
                                        <i className="bi bi-envelope me-2"></i>
                                        <a href="mailto:genisbou@gmail.com" style={{textDecoration: "none"}}>genisbou@gmail.com</a>
                                    </li>
                                    <li className="list-group-item">
                                    <i className="bi bi-geo-alt me-2"></i>
                                        Alcarràs, Lleida
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">

                        <div className="card">

                            <div className="card-body">
                                <h5 className="card-title">Formulari de contacte</h5>
                                <p className="card-text">Some description here.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>

        </>

    );
}

export default Inici;