import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import ImgPropiedad from './../../../public/images/casa.jpg';

const Propiedades = () => (
    <Grid className="single-page">
        <Row>
            <div className="head-img" style={{backgroundImage: `url(${ImgPropiedad})`}}>
                <FontAwesome className="head-img-btn" name="image"/>
            </div>
            <Col sm={8}>
                <Col sm={12} className="head">
                    <div className="head-main">
                        <div className="head-pre">
                            Venta
                        </div>
                        <div className="head-title">
                            Departamento en Calle 55 e/ 4 y 5
                        </div>
                        <div className="head-sub">
                            City Bell
                        </div>
                        <div className="head-info">
                            <span className="head-info-item">
                                <FontAwesome name="bed"/> 4 Habitaciones
                            </span>
                            <span className="head-info-item"> <FontAwesome name="bath"/> 2 baños </span>
                            <span className="head-info-item"> <FontAwesome name="car"/> Cochera </span>
                        </div>
                    </div>
                </Col>
                <Col sm={12}>
                    <hr/>
                </Col>
                <Col sm={12} className="content">
                    <div className="content-main">
                        <p> Excelente departamento al frente, cuenta con living,
                            cocina comedor, dos dormitorios en suite, lavadero cubierto,
                            dos baños, 1 toilette, dos terrazas propias y dos cocheras
                            cubiertas, los metros son aproximados.
                        </p>
                    </div>
                </Col>
                <Col sm={12}>
                    <hr/>
                </Col>
            </Col>
            <Col sm={4}>
                <Col sm={12} className="pr-box">
                    <h3>Precio ?</h3>
                    <br/>
                    <h3>Contacto ?</h3>
                </Col>
            </Col>
        </Row>
    </Grid>
);

export default Propiedades;
