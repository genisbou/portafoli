import React from 'react';
import '../styles/styles.css'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import imgPortfolio from '../assets/portfolioHome.jpg';
import jsxLogo from '../assets/jsxLogo.png';
import ReactLogo from '../assets/ReactLogo.png'
import img1 from '../assets/banner-software.jpg';
import img2 from '../assets/inici-fcalpicat.png';
import img3 from '../assets/PHP-logo.svg.png';
import img4 from '../assets/CodeIgniter.png';
import img5 from '../assets/mysql.png';

import img6 from '../assets/orderTicket-JaVA.png';
import img7 from '../assets/icon-java.png';
import img8 from '../assets/maven.svg';

import Cv from '../assets/Cv-es-Genis.pdf';
import DocuAlpi from '../assets/memoria defenitiva.pdf'

import img9 from '../assets/dawguardia-admin.png';
import img10 from '../assets/boostrap-logo.png';
import {useTranslation} from "react-i18next";





const Inici = () => {
    const [t, i18n] = useTranslation("global");
    return (
        <>
            <Header/>


            <img className="banner" src={img1} alt="Imagen de Japón"/>
            <div className="container">
                <div className="inici">

                    <h3>{t('home.title')}</h3>
                    <p>
                        {t('home.presentation1')}
                    </p>
                    <p>
                        {t('home.presentation2')}
                    </p>
                </div>
                <a type="button" className="btn btn-light"
                   href={Cv}
                   target="_blank"
                   rel="noopener noreferrer"

                > <i className="bi bi-file-earmark-person me-2"></i>
                    {t('home.downloadCv')}
                </a>

                <p></p>

                <h3>
                    <i className="bi bi-building"></i>
                    {t('home.titleWorks')}

                </h3>

                <ul className="list-group list-group-flush">

                    <li className="list-group-item">
                        <strong>{t('home.titleYepes')}</strong> (06/2024 – 11/2024, Alcarràs)<br/>
                        {t('home.descriptionYepes')}
                    </li>

                    <li className="list-group-item">
                        <strong>{t('home.titleTorres')}</strong> (10/2024 - 03/2025, Torres de Segre)<br/>
                        {t('home.descriptionTorres')}

                    </li>

                    <li className="list-group-item">
                        <strong>{t('home.titleCapa')}</strong> (06/2023 - 12/2023, Lleida)<br/>
                        {t('home.descriptionCapa')}
                    </li>
                    <li className="list-group-item">
                        <strong>{t('home.titleOptica')}</strong> (02/2021 - 05/2021, Torrefarrera)<br/>
                        {t('home.descriptionOptica')}
                    </li>
                </ul>

                <p></p>
                <h3>
                    <i className="bi bi-file-earmark-code"></i>
                    {t('home.projects')}
                </h3>


                <div className="card">
                    <img src={imgPortfolio}  alt="Imagen de Japón"/>
                    <p></p>
                    <div className="card-body">
                        <h5 className="card-title"> {t('home.titlePortfolio')}</h5>
                        <p className="card-text">
                            {t('home.descriptionPortfolio')}
                        </p>
                        <img className="img-fluid logo-php" src={jsxLogo} alt="Imagen de Japón"/>
                        <img className="img-fluid logo-php" src={img10} alt="Imagen de Japón"/>
                        <img className="img-fluid logo-php" src={ReactLogo} alt="Imagen de Japón"/>

                        <p></p>
                        <a href="https://github.com/genisbou/portafoli/tree/main" target={"_blank"} className="btn btn-outline-secondary">
                            <i className=" bi bi-code-slash"></i>
                            &nbsp;  {t('home.code')}</a>
                        <p>

                        </p>


                    </div>


                </div>

                <p></p>

                <div className="card">
                    <img src={img2} alt="Imagen de Japón"/>
                    <div className="card-body">
                        <h5 className="card-title"> {t('home.titleAlpicat')}</h5>
                        <p className="card-text">
                            {t('home.descriptionAlpicat')}
                        </p>
                        <img className="img-fluid logo-php" src={img3} alt="Imagen de Japón"/>
                        <img className="img-fluid logo-php" src={img4} alt="Imagen de Japón"/>
                        <img className="img-fluid logo-php" src={img5} alt="Imagen de Japón"/>

                        <p></p>
                        <a href="https://github.com/AndreyPlakhov/Proyecto-Ci4"  target={"_blank"}  className="btn btn-outline-secondary">
                            <i className=" bi bi-code-slash"></i>
                            &nbsp;  {t('home.code')}</a>

                        <p>

                        </p>

                        <a
                            href={DocuAlpi}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-secondary"
                        >
                            <i className="bi bi-file-earmark-code me-2"></i>
                            {t('home.docu')}
                        </a>


                    </div>


                </div>



                <p></p>



                <div className="card">
                    <img src={img6} style={{width: '50%'}} alt="Imagen de Japón"/>
                    <div className="card-body">
                        <h5 className="card-title"> {t('home.titleJava')}</h5>
                        <p className="card-text">
                            {t('home.descriptionJava')}
                        </p>


                        <img className="img-fluid logo-php" src={img7} alt="Imagen de Japón"/>
                        <img className="img-fluid logo-php" src={img8} alt="Imagen de Japón"/>

                        <p></p>
                        <a href="https://github.com/genisbou/Gestor-Tiquets"  target={"_blank"}  className="btn btn-outline-secondary">
                            <i className=" bi bi-code-slash"></i>
                            &nbsp;  {t('home.code')}</a>

                        <p>

                        </p>


                    </div>


                </div>

                <p></p>

                <div className="card">
                    <img src={img9} style={{width: '75%'}} alt="Imagen de Japón"/>
                    <div className="card-body">
                        <h5 className="card-title"> {t('home.titleDawguardia')} </h5>
                        <p className="card-text">
                            {t('home.descriptionDawguardia')}

                        </p>

                        <ol className="list-group list-group-numbered">
                            <li className="list-group-item"><i class="bi bi-newspaper"></i> {t('home.functionDawguardia1')}
                            </li>
                            <li className="list-group-item"> <i class="bi bi-newspaper"></i> {t('home.functionDawguardia2')}
                            </li>
                            <li className="list-group-item"><i className="bi bi-chat-left"></i> {t('home.functionDawguardia3')}
                            </li>
                            <li className="list-group-item"><i className="bi bi-lock"></i> {t('home.functionDawguardia4')}
                            </li>
                            <li className="list-group-item"><i class="bi bi-credit-card"></i> {t('home.functionDawguardia5')}
                            </li>
                            <li className="list-group-item"><i class="bi bi-gear"></i> {t('home.functionDawguardia6')}
                            </li>
                            <li className="list-group-item"> <i class="bi bi-globe"></i> {t('home.functionDawguardia7')}
                            </li>
                        </ol>
                        <p></p>


                        <img className="img-fluid logo-php" src={img3} alt="Imagen de Japón"/>
                        <img className="img-fluid logo-php" src={img4} alt="Imagen de Japón"/>
                        <img className="img-fluid logo-php" src={img5} alt="Imagen de Japón"/>


                        <p></p>
                        <a href="https://github.com/genisbou/daw2ci4-25-genis"  target={"_blank"}  className="btn btn-outline-secondary">
                            <i className=" bi bi-code-slash"></i>
                            &nbsp; {t('home.code')}</a>

                        <p>

                        </p>


                    </div>


                </div>

            </div>


            <Footer/>

        </>

    );
}

export default Inici;