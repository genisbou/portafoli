import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

import '../styles/styles.css'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import {useTranslation} from "react-i18next";


const Inici = () => {
    const [t, i18n] = useTranslation("global");
    const form = useRef();
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = (event) => {

        event.preventDefault();

        const ServiceId = "service_0y3jslv";
        const TemplateId = "template_ql1ziyr";
        const PublicKey = "53HY72XwsBUU30KfL";

        emailjs.sendForm(ServiceId, TemplateId, form.current , PublicKey)
            .then(() => {
                setShowAlert(true)
            })
            .catch(() => {
                setShowAlert(true)
            })






    }
    return (
        <>
            <Header/>

            <div className="container">

                <h3>{t('contact.title')} </h3>
                <p>
                    {t('contact.description')}
                </p>
                <div className="row">
                    <div className="col-sm-6">

                        <div className="card h-100">

                            <div className="card-body">
                                <h5 className="card-title">
                                    {t('contact.details')}
                                </h5>
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
                                        <a href="https://www.linkedin.com/in/gen%C3%ADs-bou-maj%C3%B3s/" style={{textDecoration: "none"}}>&nbsp;  {t('contact.viewProfile')}</a>
                                    </li>
                                    <li className="list-group-item">
                                        <i className="bi bi-github" style={{fontSize: "22px"}}> </i>
                                        <a href="https://github.com/genisbou" style={{textDecoration: "none"}}>&nbsp;  {t('contact.viewProfile')}</a>

                                    </li>

                                    <li className="list-group-item">
                                        <i className="bi bi-filetype-pdf" style={{fontSize: "22px"}}> </i>
                                        <a href="/Genis-CV-es.pdf" target="_blank" style={{textDecoration: "none"}}>&nbsp;  {t('home.downloadCv')}</a>

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
                                                <form ref={form} onSubmit={handleSubmit}>
                                                    <fieldset>
                                                        <legend className="text-center header"> {t('contact.contact')}</legend>

                                                        <div className="form-group">
                                                            <span className="col-md-1 col-md-offset-2 text-center"><i
                                                                className="fa fa-user bigicon"></i></span>
                                                            <div className="col-md-8">
                                                                <input id="fname" name="username" type="text"
                                                                       placeholder= {t('contact.name')}
                                                                       className="form-control"/>
                                                            </div>
                                                        </div>


                                                        <div className="form-group">
                                                            <span className="col-md-1 col-md-offset-2 text-center"><i
                                                                className="fa fa-envelope"></i></span>
                                                            <div className="col-md-8">
                                                                <input id="email" name="email" type="email"
                                                                       placeholder= {t('contact.email')}
                                                                       className="form-control"/>
                                                            </div>
                                                        </div>

                                                        <div className="form-group">
                                                            <span className="col-md-1 col-md-offset-2 text-center"><i
                                                                className="fa fa-phone-square bigicon"></i></span>
                                                            <div className="col-md-8">
                                                                <input id="phone" name="phone" type="tel"
                                                                       placeholder={t('contact.phone')} className="form-control"/>
                                                            </div>
                                                        </div>

                                                        <div className="form-group">
                                                            <span className="col-md-1 col-md-offset-2 text-center"><i
                                                                className="fa fa-pencil-square-o bigicon"></i></span>
                                                            <div className="col-md-8">
                                                                <textarea className="form-control" id="message"
                                                                          name="message"
                                                                          placeholder= {t('contact.message')}
                                                                          rows="7"></textarea>
                                                            </div>
                                                        </div>

                                                        <p></p>

                                                        <div className="form-group">
                                                            <div className="col-md-12 text-center">
                                                                <button type="submit"
                                                                        className="btn btn-primary btn-lg">{t('contact.submit')}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                </form>


                                                {/* Mensaje de confirmación con Bootstrap 5 */}
                                                {showAlert && (
                                                    <div className="alert alert-success mt-3" role="alert">
                                                        {t('message.Submit')}
                                                    </div>
                                                )}


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