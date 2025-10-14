import React from 'react';
import '../styles/styles.css'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import img1 from '../assets/banner-software.jpg';

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
                <a type="button" class="btn btn-primary"
                   href="/Genis-CV-es.pdf"
                   target="_blank"
                   rel="noopener noreferrer"

                >
                    Descarrega el meu CV
                </a>
                <p></p>

                <h3>
                    <i className="bi bi-building" ></i>
                    Experiència laboral
                </h3>


            </div>

            <Footer/>

        </>

    );
}

export default Inici;