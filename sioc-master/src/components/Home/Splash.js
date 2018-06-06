import React, {Fragment} from 'react';
import {Col} from 'react-bootstrap';
import siocLogoInicio from './../../../public/images/sonrisa-sioc.png';
import SearchForm from './SearchForm';

const Splash = () => (
    <Fragment>
        <Col sm={12} className="text-center">
            <img src={siocLogoInicio} alt="SIOC Logo"/>
            <h3>
                Más de 4500 propiedades para <b>comprar</b>,
                <br/> <b>vender</b> o <b>alquilar</b> están esperando tu decisión!
            </h3>
            <SearchForm/>
        </Col>
    </Fragment>
);

export default Splash;
