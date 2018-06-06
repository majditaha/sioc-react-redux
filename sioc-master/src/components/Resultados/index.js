/* global window */
import React, {Component} from 'react';
import {
    Nav,
    Navbar,
    NavItem,
    NavDropdown,
    MenuItem,
    Grid,
    Row,
    Col,
    FormControl
} from 'react-bootstrap';


import MapWithSearchBox from '../Maps/MapWithSearchBox';
import ImgPropiedad from './../../../public/images/casa.jpg';

class Resultados extends Component {
    constructor(props) {
        super(props);
        this.state = {height: 0};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({height: window.innerHeight});
    }

    render() {
        const size = {
            height: this.state.height
        };
        return (
            <Grid className="results">
                <Navbar default collapseOnSelect>
                    <Navbar.Collapse>
                        <Nav pullLeft>
                            <NavDropdown title="Tipo" id="basic-nav-dropdown">
                                <p>Residencial</p>
                                <MenuItem>Casa</MenuItem>
                                <MenuItem>Campo/Quinta</MenuItem>
                                <MenuItem>Departamento</MenuItem>
                                <MenuItem>Loft</MenuItem>
                                <MenuItem>PH</MenuItem>
                                <MenuItem>Cabaña</MenuItem>
                                <MenuItem divider/>
                                <p>Comercial</p>
                                <MenuItem>Local</MenuItem>
                                <MenuItem>Campo</MenuItem>
                                <MenuItem>Garage</MenuItem>
                                <MenuItem>Industrial</MenuItem>
                                <MenuItem>Galpón</MenuItem>
                                <MenuItem>Oficina</MenuItem>
                            </NavDropdown>
                            <NavDropdown title="Precio" id="basic-nav-dropdown">
                                <MenuItem>desde hasta</MenuItem>
                            </NavDropdown>
                            <NavDropdown title="Otros" id="basic-nav-dropdown">
                                <MenuItem>Ambientes</MenuItem>
                                <MenuItem>Apto Banco</MenuItem>
                                <MenuItem>Baños</MenuItem>
                                <MenuItem>m2</MenuItem>
                                <MenuItem>Garage</MenuItem>
                                <MenuItem>Patio/Fondo</MenuItem>
                            </NavDropdown>
                            <NavItem className="pull-right">
                                <FormControl
                                    type="text"
                                    value=""
                                    placeholder="Nueva Búsqueda"
                                    maxLength={50}
                                    bsSize="sm"
                                />
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Grid className="no-padding">
                    <Row>
                        <Col sm={8} className="no-padding">
                            <MapWithSearchBox/>
                        </Col>
                        <Col md={4} className="no-padding b-column">
                            <div className="inner-b-column" style={size}>
                                <div className="prop">
                                    <div className="prop-header">
                                        <h3>
                                            <b>Lo escrito en la búsqueda</b>
                                            <small><b>158</b> en venta</small>
                                        </h3>
                                    </div>
                                    <div className="prop-detail">
                                        <img src={ImgPropiedad} alt=""/>
                                        <div className="prop-text">
                                            $10.000.000
                                            <small> 5h - 2b - 250m2</small>
                                            <p>Calle 46 251, La Plata, Buenos Aires</p>
                                        </div>
                                    </div>
                                    <div className="prop-detail">
                                        <img src={ImgPropiedad} alt=""/>
                                        <div className="prop-text">
                                            $10.000.000
                                            <small> 5h - 2b - 250m2</small>
                                            <p>Calle 46 251, La Plata, Buenos Aires</p>
                                        </div>
                                    </div>
                                    <div className="prop-detail">
                                        <img src={ImgPropiedad} alt=""/>
                                        <div className="prop-text">
                                            $10.000.000
                                            <small> 5h - 2b - 250m2</small>
                                            <p>Calle 46 251, La Plata, Buenos Aires</p>
                                        </div>
                                    </div>
                                    <div className="prop-detail">
                                        <img src={ImgPropiedad} alt=""/>
                                        <div className="prop-text">
                                            $10.000.000
                                            <small> 5h - 2b - 250m2</small>
                                            <p>Calle 46 251, La Plata, Buenos Aires</p>
                                        </div>
                                    </div>
                                    <div className="prop-detail">
                                        <img src={ImgPropiedad} alt=""/>
                                        <div className="prop-text">
                                            $10.000.000
                                            <small> 5h - 2b - 250m2</small>
                                            <p>Calle 46 251, La Plata, Buenos Aires</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </Grid>
        );
    }
}

export default Resultados;
