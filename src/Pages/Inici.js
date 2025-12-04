import React from 'react';
import '../styles/styles.css'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import img1 from '../assets/banner-software.jpg';
import img2 from '../assets/inici-fcalpicat.png';
import img3 from '../assets/PHP-logo.svg.png';
import img4 from '../assets/CodeIgniter.png';
import img5 from '../assets/mysql.png';

import img6 from '../assets/orderTicket-JaVA.png';
import img7 from '../assets/icon-java.png';
import img8 from '../assets/maven.svg';

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
                   href="/Genis-CV-es.pdf"
                   target="_blank"
                   rel="noopener noreferrer"

                > <i className="bi bi-file-earmark-person me-2"></i>
                    Descarrega el meu CV
                </a>

                <p></p>

                <h3>
                    <i className="bi bi-building"></i>
                    Experiència laboral
                </h3>

                <ul className="list-group list-group-flush">

                    <li className="list-group-item">
                        <strong>Paletitzador en Viyefruit/sa</strong> (06/2024 – 11/2024, Alcarràs)<br/>
                        Configuració i supervisió de la màquina paletitzadora, control del procés de càrrega i assegurament del palet per al transport.
                    </li>

                    <li className="list-group-item">
                        <strong>Programador en TorresEnergia - Contracte de pràctiques</strong> (10/2024 - 03/2025, Torres de Segre)<br/>
                        Actualització de la pàgina web, automatitzacions amb Visual Basic a Excel i mapejat de la xarxa
                        interna.
                    </li>

                    <li className="list-group-item">
                        <strong>Tècnic informàtic a Institut Caparrell - Contracte de pràctiquesa</strong> (06/2023 - 12/2023, Lleida)<br/>
                        Manteniment i reparació d’equips, instal·lació i configuració de sistemes operatius, gestió de
                        programari i còpies de seguretat.
                    </li>
                    <li className="list-group-item">
                        <strong>Tècnic informàtic a Natural Optics Group - Contracte de pràctiques</strong> (02/2021 - 05/2021, Torrefarrera)<br/>
                        Manteniment d’equips, instal·lació de sistemes operatius i programari, assegurant el bon
                        funcionament dels dispositius.
                    </li>
                </ul>

                <p></p>
                <h3>
                    <i className="bi bi-file-earmark-code"></i>
                    Projectes
                </h3>

                <div className="card">
                    <img src={img2} alt="Imagen de Japón"/>
                    <div className="card-body">
                        <h5 className="card-title">Club Futbol Alpicat (Projecte Real)</h5>
                        <p className="card-text">
                            Aplicació web desenvolupada amb PHP i el framework CodeIgniter 4, amb una base de dades
                            MySQL. El projecte permet als usuaris de qualsevol edat accedir fàcilment a tota la
                            informació del club de futbol: consultar els últims resultats, veure la classificació de
                            cada categoria, llegir les novetats i notícies recents, i accedir a una zona privada per a
                            administradors.
                            Aquesta àrea d’administració permet gestionar el contingut del lloc web de manera senzilla i
                            segura. El disseny està pensat per ser intuïtiu i accessible, amb una estructura clara i
                            funcional. El projecte inclou documentació tècnica detallada i el codi font està disponible
                            per a consulta.

                        </p>
                        <img className="img-fluid logo-php" src={img3} alt="Imagen de Japón"/>
                        <img className="img-fluid logo-php" src={img4} alt="Imagen de Japón"/>
                        <img className="img-fluid logo-php" src={img5} alt="Imagen de Japón"/>

                        <p></p>
                        <a href="https://github.com/AndreyPlakhov/Proyecto-Ci4" className="btn btn-outline-secondary">
                            <i className=" bi bi-code-slash"></i>
                            &nbsp; Codi font</a>

                        <p>

                        </p>

                        <a
                            href="/memoria%20defenitiva.docx.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-secondary"
                        >
                            <i className="bi bi-file-earmark-code me-2"></i>
                            Documentació tècnica del projecte
                        </a>


                    </div>


                </div>

                <p></p>


                <div className="card">
                    <img src={img6} style={{width: '50%'}} alt="Imagen de Japón"/>
                    <div className="card-body">
                        <h5 className="card-title">Gestor de tiquets de compra en Java</h5>
                        <p className="card-text">
                            Aplicació de consola en Java amb Maven que permet gestionar un tiquet de compra.
                            L’usuari pot afegir productes, consultar el tiquet complet, visualitzar el preu
                            total i accedir a cada línia de comanda mitjançant el seu índex. El projecte inclou
                            constructors, mètodes (getters, setters, equals, hashCode, toString) i control de
                            límits en l’array per evitar afegir més de 10 línies.


                        </p>


                        <img className="img-fluid logo-php" src={img7} alt="Imagen de Japón"/>
                        <img className="img-fluid logo-php" src={img8} alt="Imagen de Japón"/>

                        <p></p>
                        <a href="https://github.com/genisbou/Gestor-Tiquets" className="btn btn-outline-secondary">
                            <i className=" bi bi-code-slash"></i>
                            &nbsp; Codi font</a>

                        <p>

                        </p>


                    </div>


                </div>

                <p></p>

                <div className="card">
                    <img src={img9} style={{width: '75%'}} alt="Imagen de Japón"/>
                    <div className="card-body">
                        <h5 className="card-title"> DAWGuarida — Gestor de Notícies</h5>
                        <p className="card-text">
                            DawGuardia és una aplicació web desenvolupada amb CodeIgniter 4 que simula el funcionament
                            d’un diari digital d’última generació.
                            L’aplicació implementa un sistema de rols complet amb Administrador, Editor, Periodista,
                            Subscriptor i Visitant, cadascun amb permisos específics.
                            Les funcionalitats principals són :

                        </p>

                        <ol className="list-group list-group-numbered">
                            <li className="list-group-item"><i class="bi bi-newspaper"></i> Gestió de notícies per part
                                de periodistes, amb validació
                                prèvia dels editors.
                            </li>
                            <li className="list-group-item"> <i class="bi bi-newspaper"></i> Classificació per seccions
                                (local, esports, societat,
                                opinió, etc.).
                            </li>
                            <li className="list-group-item"><i className="bi bi-chat-left"></i> Sistema de comentaris:
                                els visitants poden comentar, però
                                els comentaris s’han de validar; els subscriptors poden fer-ho lliurement.
                            </li>
                            <li className="list-group-item"><i className="bi bi-lock"></i> Notícies exclusives per a
                                subscriptors.
                            </li>
                            <li className="list-group-item"><i class="bi bi-credit-card"></i> Gestió de subscripcions: alta, validació i desactivació
                                d’usuaris per impagament.
                            </li>
                            <li className="list-group-item"><i class="bi bi-gear"></i> Panell administratiu complet per controlar usuaris, rols,
                                seccions i publicacions.
                            </li>
                            <li className="list-group-item"> <i class="bi bi-globe"></i> Compartició de notícies mitjançant enllaços públics del
                                tipus :
                                <em> https://localhost/noticia/seccio/el-titular-de-la-noticia. </em>
                            </li>
                        </ol>
                        <p></p>
                        <p>
                            El projecte aplica el patró MVC amb CodeIgniter i gestió de base de dades amb MySQL.
                        </p>


                        <img className="img-fluid logo-php" src={img3} alt="Imagen de Japón"/>
                        <img className="img-fluid logo-php" src={img4} alt="Imagen de Japón"/>
                        <img className="img-fluid logo-php" src={img5} alt="Imagen de Japón"/>


                        <p></p>
                        <a href="https://github.com/genisbou/daw2ci4-25-genis" className="btn btn-outline-secondary">
                            <i className=" bi bi-code-slash"></i>
                            &nbsp; Codi font</a>

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