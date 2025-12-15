import React from 'react';
import '../styles/styles.css'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import {useTranslation} from "react-i18next";
import imgPerfil from "../assets/imgPerfil.jpg";

const SobreMi = () => {
    const [t, i18n] = useTranslation("global");
    return (
        <>
            <Header/>

            <div className="container mt-4">

                <h3 className="titlePage" ><i className="bi bi-person-circle me-2"></i>{t('aboutMe.title')}</h3>

                <div className="row mt-4">

                    {/* Presentació personal */}
                    <div className="col-md-4 text-center">
                        <img
                            src={imgPerfil}
                            alt="Foto de perfil"
                            className="img-fluid rounded-circle shadow img-thumbnail"
                            style={{maxWidth: '220px'}}
                        />
                    </div>

                    <div className="col-md-8">
                        <p>
                            {t('aboutMe.presentation1')}
                        </p>

                        <p>
                            {t('aboutMe.presentation2')}
                        </p>

                        <p>
                            {t('aboutMe.presentation3')}
                        </p>
                    </div>
                </div>

                <hr className="my-4"/>

                {/* Formació */}

                <section className="">
                    <h4><i className="bi bi-mortarboard me-2"></i>{t('aboutMe.titleTraining')}</h4>

                    <ul className="list-group list-group-flush mb-4">
                        <li className="list-group-item">
                            <strong>{t('aboutMe.titleDaw')}</strong><br/>
                            Institut Caparrella, Lleida (2024 - 2025)
                        </li>

                        <li className="list-group-item">
                            <strong>{t('aboutMe.titleAsix')}</strong><br/>
                            Institut Caparrella, Lleida (2022 - 2024)
                        </li>

                        <li className="list-group-item">
                            <strong>{t('aboutMe.titleSmx')}</strong><br/>
                            Institut Caparrella, Lleida (2019 - 2022)
                        </li>

                        {/*<li className="list-group-item">
                        <strong>Formació complementària</strong><br/>
                        Cursos de  ..
                    </li>*/}
                    </ul>
                </section>


                <hr className="my-4"/>

                {/* Habilitats */}
                <h4><i className="bi bi-gear-wide-connected me-2"></i>{t('aboutMe.skills')}</h4>

                <div className="row text-center mt-3">

                    <div className="col-6 col-md-3 mb-3 icono">
                        <i className="bi bi-filetype-php fs-1"></i>
                        <p>PHP / CodeIgniter 4</p>
                    </div>

                    <div className="col-6 col-md-3 mb-3 icono">
                        <i className="bi bi-filetype-js fs-1"></i>
                        <p>JavaScript / React</p>
                    </div>

                    <div className="col-6 col-md-3 mb-3 icono">
                        <i className="bi bi-database fs-1"></i>
                        <p>MySQL</p>
                    </div>

                    <div className="col-6 col-md-3 mb-3 icono">
                        <i className="bi bi-terminal fs-1"></i>
                        <p>Java / Maven</p>
                    </div>

                    <div className="col-6 col-md-3 mb-3 icono">
                        <i className="bi bi-laptop fs-1"></i>
                        <p>Windows, Linux, {t('aboutMe.networking')}</p>
                    </div>

                    <div className="col-6 col-md-3 mb-3 icono">
                        <i className="bi bi-git fs-1"></i>
                        <p>Git / GitHub</p>
                    </div>

                </div>

                <hr className="my-4"/>

                {/* Objectius professionals */}
                <h4><i className="bi bi-flag me-2"></i>{t('aboutMe.objectives')}</h4>

                <p>
                    {t('aboutMe.objectivesText')}
                </p>

            </div>

            <Footer/>
        </>
    );
}

export default SobreMi;