import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

import '../styles/styles.css'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import {useTranslation} from "react-i18next";
import Cv from '../assets/Cv-es-Genis.pdf';
import styled,{css} from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faCircleExclamation, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {focus} from "@testing-library/user-event/dist/focus";

const colors = {
    borde: "#0075FF",
    error: "#bb2929",
    exit : "#1ed12d",
    warn : "#ff8c00" // taronja avis
}

export const LeyendaError = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${colors.error};
`;

export const ErrorGeneral = styled.p`
    color: ${colors.error};
    font-weight: 600;
    margin-top: 10px;
`;

export const Contador = styled.p`
    font-size: 12px;
    text-align: right;

    ${props => props.warn && css`
        color: ${colors.warn};
        font-weight: 700;
    `}
`;




export const IconValidation = styled(FontAwesomeIcon)`
    position: absolute;
    right: 10px;
    bottom: 14px;
    z-index: 100;
    font-size: 16px;
    opacity: 0;
    
    ${props => props.valido === 'false' && css `
        opacity: 1;
        color: ${colors.error};
        
    `}

    ${props => props.valido === 'true' && css `
        opacity: 1;
        color: ${colors.exit};
        
    `}
    
    
`;
export const GrupoInput = styled.div`
    position: relative;
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
    const [correo, cambiarCorreo] = useState({campo: '', valido: null});
    const [telefono, cambiartelefono] = useState({campo: '', valido: null});
    const [mensaje, cambiarMensaje] = useState({campo: '', valido: null});


    const expresiones = {

        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^[6789]\d{8}$/,
        mensaje: /^.{10,500}$/  // mínim 10, màxim 500

    } // Font : https://github.com/falconmasters/formulario-css-grid/blob/master/js/formulario.js


    const onChange = (e) => {
        cambiarusuario({...usuario, campo: e.target.value});
    };

    const onChangeMail = (e) => {
        cambiarCorreo({...correo, campo: e.target.value});
    }
    const onChangeTel = (e) => {
        cambiartelefono({...telefono, campo: e.target.value});
    }
    const onChangeMensaje = (e) => {
        cambiarMensaje({...mensaje, campo: e.target.value});
    };


    const validarUsuario = () => {
        if(expresiones.nombre.test(usuario.campo)){
            cambiarusuario({...usuario, valido: 'true'});
        } else {
            cambiarusuario({...usuario, valido: 'false'});
        }
    }

    const validarCoreo = () => {
        if(expresiones.correo.test(correo.campo)){
            cambiarCorreo({...correo, valido: 'true'});
        } else {
            cambiarCorreo({...correo, valido: 'false'});
        }
    }

    const validarTel = () => {
        if(expresiones.telefono.test(telefono.campo)){
            cambiartelefono({...telefono, valido: 'true'});
        } else {
            cambiartelefono({...telefono, valido: 'false'});
        }
    }

    const validarMensaje = () => {
        if (mensaje.campo.length >= 10 && mensaje.campo.length <= 500) {
            cambiarMensaje({...mensaje, valido: 'true'});
        } else {
            cambiarMensaje({...mensaje, valido: 'false'});
        }
    }




    const handleSubmit = (event) => {

        event.preventDefault();

        // Si algun camp té errors no enviar
        // sino > SendForm

        if (
            usuario.valido !== 'true' ||
            correo.valido !== 'true'  ||
            telefono.valido !== 'true' ||
            mensaje.valido !== 'true') {

            setShowAlert(false)
        } else {
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
    }


    return (
        <>
            <Header/>

            <div className="container">

                <h3 className="titlePage" >{t('contact.title')} </h3>
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
                                        <a href={Cv} target="_blank" style={{textDecoration: "none"}}>&nbsp;  {t('home.downloadCv')}</a>

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
                                                                <i className="fa fa-user bigicon"></i> {t('contact.name')}
                                                            </Label>



                                                            <span className="col-md-1 col-md-offset-2 text-center"></span>
                                                            <div className="col-md-8">
                                                                <GrupoInput>
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

                                                                    <IconValidation
                                                                        icon={usuario.valido === 'true' ? faCheckCircle : faTimesCircle}
                                                                        valido={usuario.valido}
                                                                    />
                                                                </GrupoInput>

                                                                {usuario.valido === 'false' && (
                                                                    <LeyendaError>
                                                                        {t('contact.errorName')}
                                                                    </LeyendaError>
                                                                )}
                                                            </div>
                                                        </div>


                                                        <div className="form-group">
                                                            <Label htmlFor="email" valido={correo.valido}>
                                                                <i className="fa fa-envelope"></i> {t('contact.email')}
                                                            </Label>



                                                            <span className="col-md-1 col-md-offset-2 text-center"></span>
                                                            <div className="col-md-8">
                                                                <GrupoInput>
                                                                    <Input
                                                                        type="email"
                                                                        name="email"
                                                                        placeholder={t('contact.email')}
                                                                        value={correo.campo}
                                                                        onChange={onChangeMail}
                                                                        onKeyUp={validarCoreo}
                                                                        onBlur={validarCoreo}
                                                                        valido={correo.valido}
                                                                    />

                                                                    <IconValidation
                                                                        icon={correo.valido === 'true' ? faCheckCircle : faTimesCircle}
                                                                        valido={correo.valido}
                                                                    />
                                                                </GrupoInput>

                                                                {correo.valido === 'false' && (
                                                                    <LeyendaError>
                                                                        {t('contact.errorEmail')}
                                                                    </LeyendaError>
                                                                )}

                                                            {/*<span className="col-md-1 col-md-offset-2 text-center"><i
                                                                className="fa fa-envelope"></i></span>
                                                            <div className="col-md-8">
                                                                <input id="email" name="email" type="email"
                                                                       placeholder= {t('contact.email')}
                                                                       className="form-control"/>*/}
                                                            </div>
                                                        </div>

                                                        <div className="form-group">

                                                            <Label htmlFor="phone" valido={telefono.valido}>
                                                                <i className="fa fa-phone"></i> {t('contact.phone')}
                                                            </Label>



                                                            <span className="col-md-1 col-md-offset-2 text-center"></span>
                                                            <div className="col-md-8">
                                                                <GrupoInput>
                                                                    <Input
                                                                        type="text"
                                                                        name="username"
                                                                        placeholder={t('contact.phone')}
                                                                        value={telefono.campo}
                                                                        onChange={onChangeTel}
                                                                        onKeyUp={validarTel}
                                                                        onBlur={validarTel}
                                                                        valido={telefono.valido}
                                                                    />

                                                                    <IconValidation
                                                                        icon={telefono.valido === 'true' ? faCheckCircle : faTimesCircle}
                                                                        valido={telefono.valido}
                                                                    />
                                                                </GrupoInput>

                                                                {telefono.valido === 'false' && (
                                                                    <LeyendaError>
                                                                        {t('contact.errorTel')}
                                                                    </LeyendaError>
                                                                )}
                                                            </div>
                                                        </div>



                                                        {/*<input id="phone" name="phone" type="tel"
                                                                       placeholder={t('contact.phone')}
                                                                       className="form-control"/>*/}



                                                        <div className="form-group">
                                                            <Label htmlFor="message" valido={mensaje.valido}>
                                                                <i class="bi bi-chat-text"></i>  {t('contact.message')}
                                                            </Label>

                                                            <div className="col-md-8">
                                                                <GrupoInput>
                                                                    <textarea
                                                                        className="form-control"
                                                                        id="message"
                                                                        name="message"
                                                                        placeholder={t('contact.messagePh')}
                                                                        rows="7"
                                                                        value={mensaje.campo}
                                                                        onChange={onChangeMensaje}
                                                                        onKeyUp={validarMensaje}
                                                                        onBlur={validarMensaje}
                                                                        style={{
                                                                            border:
                                                                                mensaje.valido === 'false'
                                                                                    ? `3px solid ${colors.error}`
                                                                                    : mensaje.valido === 'true'
                                                                                        ? `3px solid ${colors.exit}`
                                                                                        : '3px solid transparent'
                                                                        }}
                                                                    ></textarea>
                                                                </GrupoInput>

                                                                {/* Comptador amb avís */}
                                                                <Contador warn={mensaje.campo.length > 450}>
                                                                    {mensaje.campo.length}/500
                                                                </Contador>

                                                                {/* Error si passa de 500 o és massa curt */}
                                                                {mensaje.valido === 'false' && (
                                                                    <LeyendaError>{t('contact.errorMessage')}</LeyendaError>
                                                                )}
                                                            </div>
                                                        </div>

                                                        <p></p>

                                                        <div className="form-group">
                                                            <div className="col-md-12 text-center">
                                                                <button type="submit"
                                                                        className="btn btn-success w-100 mt-3">{t('contact.submit')}
                                                                </button>
                                                                <p>
                                                                    { (usuario.valido === 'false' || correo.valido === 'false' || telefono.valido === 'false' || mensaje.valido == 'false') && (
                                                                        <ErrorGeneral>
                                                                            <FontAwesomeIcon icon={faCircleExclamation} />
                                                                            {t('contact.errorGeneral')}
                                                                        </ErrorGeneral>
                                                                    )}

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