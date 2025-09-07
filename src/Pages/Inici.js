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
            </div>
            
            <Footer/>

        </>

    );
}

export default Inici;