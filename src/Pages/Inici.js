import React from 'react';
import '../styles/styles.css'
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Inici = () => {
    return (
        <>
            <Header/>

            <div className="container">
                <p>Hola món</p>
                <a type="button" class="btn btn-primary"
                    href="/Genis-CV-es.pdf"
                    target="_blank"
                    rel="noopener noreferrer"

                >
                    Descarrega el meu CV
                </a>

            </div>

            <Footer/>

        </>

    );
}

export default Inici;