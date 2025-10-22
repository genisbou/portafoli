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





const Inici = () => {
    return (
        <>
            <Header/>


            <img className="banner" src={img1} alt="Imagen de Japón"/>
            <div className="container">
                <div className="inici">

                    <h1>Benvingut al meu portafoli</h1>
                    <p>
                        Sóc Genís, tècnic de sistemes i operari especialitzat en paletització i maquinària
                        automatitzada. Amb experiència en el sector logístic i formació en desenvolupament web, combino
                        la precisió tècnica amb una gran capacitat d’adaptació.
                    </p>
                    <p>
                        Aquest espai recull el meu recorregut professional, les meves habilitats i projectes, amb
                        l’objectiu de continuar creixent en entorns tecnològics i productius. Si busques algú compromès,
                        meticulós i amb ganes d’aportar valor, estàs al lloc adequat.
                    </p>
                </div>
                <a type="button" className="btn btn-primary"
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
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                    <li className="list-group-item">A fourth item</li>
                    <li className="list-group-item">And a fifth one</li>
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
                    <img src={img6}  style= {{ width: '50%' }} alt="Imagen de Japón"/>
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
                        <a href="https://github.com/AndreyPlakhov/Proyecto-Ci4" className="btn btn-outline-secondary">
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