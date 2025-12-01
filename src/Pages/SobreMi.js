import React from 'react';
import '../styles/styles.css'
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const SobreMi = () => {
    return (
        <>
            <Header/>

            <div className="container mt-4">

                <h3><i className="bi bi-person-circle me-2"></i>Sobre mi</h3>

                <div className="row mt-4">

                    {/* Presentació personal */}
                    <div className="col-md-4 text-center">
                        <img
                            src="/imgPerfil.jpg"
                            alt="Foto de perfil"
                            className="img-fluid rounded-circle shadow"
                            style={{maxWidth: '220px'}}
                        />
                    </div>

                    <div className="col-md-8">
                        <p>
                            Hola! Sóc <strong>Genís Bou</strong>, tècnic en sistemes microinformàtics i xarxes
                            i graduat en <strong>Desenvolupament d’Aplicacions Web (DAW)</strong>.
                            M’apassiona la tecnologia, l’automatització i la resolució de problemes, tant en
                            entorns de programació com en maquinària industrial i sistemes informàtics.
                        </p>

                        <p>
                            Soc una persona constant, responsable i que aprèn ràpid.
                            Disfruto treballant en equip i m’agrada mantenir una actitud proactiva, millorant
                            processos i buscant noves solucions.
                        </p>

                        <p>
                            Actualment em trobo expandint els meus coneixements en el món del desenvolupament web,
                            aprenent frameworks moderns i reforçant conceptes de backend i bases de dades.
                        </p>
                    </div>
                </div>

                <hr className="my-4"/>

                {/* Formació */}
                <h4><i className="bi bi-mortarboard me-2"></i>Formació Acadèmica</h4>

                <ul className="list-group list-group-flush mb-4">
                    <li className="list-group-item">
                        <strong>Cicle Superior en Desenvolupament d’Aplicacions Web – DAW</strong><br/>
                        Institut Caparrella, Lleida (2024 - 2025)
                    </li>

                    <li className="list-group-item">
                        <strong>Cicle Superior en Administració de Sistemes
                            Informàtics en xarxa – ASIX</strong><br/>
                        Institut Caparrella, Lleida (2022 - 2024)
                    </li>

                    <li className="list-group-item">
                        <strong>Cicle Mitjà en Sistemes Microinformàtics i Xarxes – SMX</strong><br/>
                        Institut Caparrella, Lleida (2019 - 2022)
                    </li>

                    {/*<li className="list-group-item">
                        <strong>Formació complementària</strong><br/>
                        Cursos de  ..
                    </li>*/}
                </ul>

                <hr className="my-4"/>

                {/* Habilitats */}
                <h4><i className="bi bi-gear-wide-connected me-2"></i>Habilitats tècniques</h4>

                <div className="row text-center mt-3">

                    <div className="col-6 col-md-3 mb-3">
                        <i className="bi bi-filetype-php fs-1"></i>
                        <p>PHP / CodeIgniter 4</p>
                    </div>

                    <div className="col-6 col-md-3 mb-3">
                        <i className="bi bi-filetype-js fs-1"></i>
                        <p>JavaScript / React</p>
                    </div>

                    <div className="col-6 col-md-3 mb-3">
                        <i className="bi bi-database fs-1"></i>
                        <p>MySQL</p>
                    </div>

                    <div className="col-6 col-md-3 mb-3">
                        <i className="bi bi-terminal fs-1"></i>
                        <p>Java / Maven</p>
                    </div>

                    <div className="col-6 col-md-3 mb-3">
                        <i className="bi bi-laptop fs-1"></i>
                        <p>Windows, Linux, Xarxes, Muntatge</p>
                    </div>

                    <div className="col-6 col-md-3 mb-3">
                        <i className="bi bi-git fs-1"></i>
                        <p>Git / GitHub</p>
                    </div>

                </div>

                <hr className="my-4"/>

                {/* Objectius professionals */}
                <h4><i className="bi bi-flag me-2"></i>Objectius</h4>

                <p>
                    El meu objectiu és créixer com a desenvolupador web
                    i seguir formant-me en tecnologies modernes, aportant alhora
                    una visió tècnica basada en la meva experiència en sistemes,
                    automatització i manteniment informàtic.
                </p>

            </div>

            <Footer/>
        </>
    );
}

export default SobreMi;