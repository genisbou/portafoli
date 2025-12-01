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

                        <div className="card h-100">

                            <div className="card-body">
                                <h5 className="card-title">Dades de contacte</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <i className="bi bi-telephone me-2" style={{fontSize: "22px"}}> </i>
                                        +34 640 785 184
                                    </li>
                                    <li className="list-group-item">
                                        <i className="bi bi-envelope me-2" style={{fontSize: "22px"}}> </i>
                                        <a href="mailto:genisbou@gmail.com" style={{textDecoration: "none"}}>genisbou@gmail.com</a>
                                    </li>
                                    <li className="list-group-item">
                                    <i className="bi bi-geo-alt me-2" style={{fontSize: "22px"}}> </i>
                                        Alcarràs, Lleida
                                    </li>
                                    <li className="list-group-item">
                                        <i className="bi bi-linkedin" style={{fontSize: "22px"}}> </i>
                                        <a href="https://www.linkedin.com/in/gen%C3%ADs-bou-maj%C3%B3s/" style={{textDecoration: "none"}}>&nbsp;Veure Perfil</a>
                                    </li>
                                    <li className="list-group-item">
                                        <i className="bi bi-github" style={{fontSize: "22px"}}> </i>
                                        <a href="https://github.com/genisbou" style={{textDecoration: "none"}}>&nbsp;Veure Perfil</a>

                                    </li>

                                    <li className="list-group-item">
                                        <i className="bi bi-filetype-pdf" style={{fontSize: "22px"}}> </i>
                                        <a href="/Genis-CV-es.pdf" target="_blank" style={{textDecoration: "none"}}>&nbsp;Descarrega el meu CV</a>

                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">

                        <div className="card h-10
                        0">

                            <div className="card-body">

                                <div className="container">
                                    <div className="row">

                                        <div className="col-md-12">
                                            <div className="well well-sm">
                                                <form className="form-horizontal" method="post">
                                                    <fieldset>
                                                        <legend className="text-center header">Contacte</legend>

                                                        <div className="form-group">
                                                            <span className="col-md-1 col-md-offset-2 text-center"><i
                                                                className="fa fa-user bigicon"></i></span>
                                                            <div className="col-md-8">
                                                                <input id="fname" name="name" type="text"
                                                                       placeholder="Nom"
                                                                       className="form-control"/>
                                                            </div>
                                                        </div>


                                                        <div className="form-group">
                                                            <span className="col-md-1 col-md-offset-2 text-center"><i
                                                                className="fa fa-envelope"></i></span>
                                                            <div className="col-md-8">
                                                                <input id="email" name="email" type="text"
                                                                       placeholder="Correu electrònic"
                                                                       className="form-control"/>
                                                            </div>
                                                        </div>

                                                        <div className="form-group">
                                                            <span className="col-md-1 col-md-offset-2 text-center"><i
                                                                className="fa fa-phone-square bigicon"></i></span>
                                                            <div className="col-md-8">
                                                                <input id="phone" name="phone" type="text"
                                                                       placeholder="Telèfon" className="form-control"/>
                                                            </div>
                                                        </div>

                                                        <div className="form-group">
                                                            <span className="col-md-1 col-md-offset-2 text-center"><i
                                                                className="fa fa-pencil-square-o bigicon"></i></span>
                                                            <div className="col-md-8">
                                                                <textarea className="form-control" id="message"
                                                                          name="message"
                                                                          placeholder="Enter your massage for us here. We will get back to you within 2 business days."
                                                                          rows="7"></textarea>
                                                            </div>
                                                        </div>

                                                        <p></p>

                                                        <div className="form-group">
                                                            <div className="col-md-12 text-center">
                                                                <button type="submit"
                                                                        className="btn btn-primary btn-lg">Enviar
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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