import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

import '../styles/styles.css'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import {useTranslation} from "react-i18next";
import CvGenis from '../assets/Genis-CV-es.pdf';
import styled,{css} from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faCircleExclamation} from "@fortawesome/free-solid-svg-icons";
import {focus} from "@testing-library/user-event/dist/focus";

const colors = {
    borde: "#0075FF",
    error: "#bb2929",
    exit : "#1ed12d"
}

export const LeyendaError = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${colors.error};
`;

export const IconValidation = styled(FontAwesomeIcon)`
    position: absolute;
    right: 10px;
    bottom: 14px;
    z-index: 100;
    font-size: 16px;
`;

export const Input = styled.input`
    width: 100%;
    background: #fff;
    border-radius: 3px;
    height: 45px;
    line-height: 45px;
    padding: 0 40px 0 10px;
    transition: .3s ease all;
    border: 3px solid transparent;

    &:focus{
        border: 3px solid ${colors.borde};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163, 0.4);
    }

    ${props => props.valido === 'true' && css`
        border: 3px solid ${colors.exit};
    `}

    ${props => props.valido === 'false' && css`
        border: 3px solid ${colors.error};
    `}
`;

export const Label = styled.label`
    display: block;
    font-weight: 700;
    padding: 10px;
    min-height: 40px;
    cursor: pointer;

    ${props => props.valido === 'false' && css`
       color: ${colors.error};
    `}
`;





const Inici = () => {
    const [t, i18n] = useTranslation("global");
    const form = useRef();
    const [showAlert, setShowAlert] = useState(false);
    const [usuario, cambiarusuario] = useState({campo: '', valido: null});

    const Expresiones = {
        usuario: /^([A-Za-zÑñÁáÉéÍíÓóÚú]+[\w'\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+[\w'\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/
    };



    const onChange = (e) => {
        cambiarusuario({...usuario, campo: e.target.value});
    };

    const validarUsuario = () => {
        if(Expresiones.usuario.test(usuario.campo)){
            cambiarusuario({...usuario, valido: 'true'});
        } else {
            cambiarusuario({...usuario, valido: 'false'});
        }
    }


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
                                        <a href={CvGenis} target="_blank" style={{textDecoration: "none"}}>&nbsp;  {t('home.downloadCv')}</a>

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
                                                            <Label htmlFor="username" valido={usuario.valido}>
                                                                <i className="fa fa-user bigicon"></i> Nom
                                                            </Label>



                                                            <span className="col-md-1 col-md-offset-2 text-center"></span>
                                                            <div className="col-md-8">
                                                                <Input
                                                                    type="text"

                                                                    name="username"
                                                                    placeholder={t('contact.name')}
                                                                    value={usuario.campo}
                                                                    onChange={onChange}
                                                                    onKeyUp={validarUsuario}
                                                                    onBlur={validarUsuario}
                                                                    valido={usuario.valido}
                                                                />

                                                                {usuario.valido === 'true' && (
                                                                    <IconValidation icon={faCheckCircle} style={{color: colors.exit}}/>
                                                                )}

                                                                {usuario.valido === 'false' && (
                                                                    <>
                                                                        <IconValidation icon={faCircleExclamation} style={{color: colors.error}}/>
                                                                        <LeyendaError>
                                                                            El nom no és vàlid.
                                                                        </LeyendaError>
                                                                    </>
                                                                )}
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
                                                                <p></p>
                                                                <p>
                                                                    <FontAwesomeIcon icon={faCircleExclamation} />
                                                                    <strong>Error:</strong> Siusplau, ompli el formulari correctament.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                </form>


                                                {/* Mensaje de confirmación con Bootstrap 5 */}
                                                {showAlert && (
                                                    <div className="alert alert-success mt-3" role="alert">
                                                        {t('contact.messageSubmit')}
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