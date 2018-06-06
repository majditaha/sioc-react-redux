import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
    Grid,
    Row,
    Col,
    FormControl,
    FormGroup,
    Button,
    ButtonToolbar,
    Label
} from 'react-bootstrap';

import {Dwelling} from '../../../../model/index';
import {savePartialDwelling} from '../../../../actions/index';

class Characteristics extends Component {
    static propTypes = {
        savePartialDwelling: PropTypes.func.isRequired,
        history: PropTypes.shape({
            push: PropTypes.func.isRequired
        }).isRequired,
        dwelling: PropTypes.shape({})
    };

    static defaultProps = {
        dwelling: new Dwelling()
    };

    constructor(props) {
        super(props);
        this.state = {dwelling: new Dwelling()};
        if (this.props.dwelling) {
            this.state = this.props;
        }
    }

    handleChange({target: {id, value}}, type) {
        this.setState(
            state => ({
                dwelling: {...state.dwelling, [id]: {...state.dwelling[id], [type]: value}}
            })
        );
    }

    handleSubmit() {
        const {dwelling} = this.state;
        this.props.savePartialDwelling(dwelling);
        this.props.history.push('/dwellings/description');
    }

    render() {
        const {dwelling} = this.state;
        return (
            <Grid className="animated fadeIn">
                <Row>
                    <Col sm={12}>
                        <h2>Completar <b>Espacios</b></h2>
                        <Row>
                            <Col sm={2}>
                                <FormGroup controlId="spaces">
                                    <Label>Dormitorios</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.spaces.dorms}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'dorms')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value={1} label="1"/>
                                        <option value={2} label="2"/>
                                        <option value={3} label="3"/>
                                        <option value={4} label="4"/>
                                        <option value={5} label="5"/>
                                        <option value={6} label="6"/>
                                        <option value={7} label="7"/>
                                        <option value={8} label="8"/>
                                        <option value={9} label="9"/>
                                        <option value={10} label="10"/>
                                        <option value={11} label="Más de 10"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="spaces">
                                    <Label>Placards</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.spaces.closets}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'closets')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value={1} label="1"/>
                                        <option value={2} label="2"/>
                                        <option value={3} label="3"/>
                                        <option value={4} label="4"/>
                                        <option value={5} label="5"/>
                                        <option value={6} label="6"/>
                                        <option value={7} label="7"/>
                                        <option value={8} label="8"/>
                                        <option value={9} label="9"/>
                                        <option value={10} label="10"/>
                                        <option value={11} label="Más de 10"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="spaces">
                                    <Label>Ambientes</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.spaces.rooms}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'rooms')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value={1} label="1"/>
                                        <option value={2} label="2"/>
                                        <option value={3} label="3"/>
                                        <option value={4} label="4"/>
                                        <option value={5} label="5"/>
                                        <option value={6} label="6"/>
                                        <option value={7} label="7"/>
                                        <option value={8} label="8"/>
                                        <option value={9} label="9"/>
                                        <option value={10} label="10"/>
                                        <option value={11} label="Más de 10"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="spaces">
                                    <Label>Baños</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.spaces.wc}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'wc')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value={1} label="1"/>
                                        <option value={2} label="2"/>
                                        <option value={3} label="3"/>
                                        <option value={4} label="4"/>
                                        <option value={5} label="5"/>
                                        <option value={6} label="6"/>
                                        <option value={7} label="7"/>
                                        <option value={8} label="8"/>
                                        <option value={9} label="9"/>
                                        <option value={10} label="10"/>
                                        <option value={11} label="Más de 10"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="spaces">
                                    <Label>Toillete</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.spaces.toillete}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'toillete')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value={1} label="1"/>
                                        <option value={2} label="2"/>
                                        <option value={3} label="3"/>
                                        <option value={4} label="4"/>
                                        <option value={5} label="5"/>
                                        <option value={6} label="6"/>
                                        <option value={7} label="7"/>
                                        <option value={8} label="8"/>
                                        <option value={9} label="9"/>
                                        <option value={10} label="10"/>
                                        <option value={11} label="Más de 10"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="spaces">
                                    <Label>Garage</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.spaces.garage}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'garage')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value="No" label="No"/>
                                        <option value="Si, Cubierta" label="Si, Cubierta"/>
                                        <option value="2 Autos" label="2 Autos"/>
                                        <option value="3 Autos" label="3 Autos"/>
                                        <option value="4 Autos" label="4 Autos"/>
                                        <option value="5 Autos" label="5 Autos"/>
                                        <option value="6 o más autos" label="6 o más Autos"/>
                                        <option value="Semi Cubierta" label="Semi Cubierta"/>
                                        <option value="Descubierta" label="Descubierta"/>
                                        <option value="Optativa" label="Optativa"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="spaces">
                                    <Label>Living</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.spaces.living}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'living')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value="No" label="No"/>
                                        <option value="Si" label="Si"/>
                                        <option value="Living Comedor" label="Living Comedor"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="spaces">
                                    <Label>Comedor</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.spaces.dinning}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'dinning')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value="No" label="No"/>
                                        <option value="Si" label="Si"/>
                                        <option value="Cocina Comedor" label="Cocina Comedor"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="spaces">
                                    <Label>Cocina</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.spaces.kitchen}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'kitchen')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value="No" label="No"/>
                                        <option value="Si" label="Si"/>
                                        <option value="Cocina Comedor" label="Cocina Comedor"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="spaces">
                                    <Label>Patio</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.spaces.yard}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'yard')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value="No" label="No"/>
                                        <option value="Si" label="Si"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="spaces">
                                    <Label>Lavadero</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.spaces.laundry}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'laundry')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value="No" label="No"/>
                                        <option value="Cubierto" label="Cubierto"/>
                                        <option value="Dos" label="Dos"/>
                                        <option value="Incorporado" label="Incorporado"/>
                                        <option value="Descubierto" label="Descubierto"/>
                                        <option value="Semi Cubierto" label="Semi Cubierto"/>
                                        <option value="Compartido" label="Compartido"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="spaces">
                                    <Label>Terraza</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.spaces.terrace}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'terrace')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value="No" label="No"/>
                                        <option value="Si" label="Si"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="spaces">
                                    <Label>Balcón</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.spaces.balcony}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'balcony')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value="No" label="No"/>
                                        <option value="Si" label="Si"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="spaces">
                                    <Label>Jardín</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.spaces.garden}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'garden')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value="No" label="No"/>
                                        <option value="Si" label="Si"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="spaces">
                                    <Label>Piscinas</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.spaces.pool}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'pool')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value="No" label="No"/>
                                        <option value="Si" label="Si"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="spaces">
                                    <Label>Quincho</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.spaces.barbacue}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'barbacue')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value="No" label="No"/>
                                        <option value="Si" label="Si"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="spaces">
                                    <Label>Plantas</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.spaces.floors}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'floors')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value={1} label="1"/>
                                        <option value={2} label="2"/>
                                        <option value={3} label="3"/>
                                        <option value={4} label="4"/>
                                        <option value={5} label="5"/>
                                        <option value={6} label="6"/>
                                        <option value={7} label="7"/>
                                        <option value={8} label="8"/>
                                        <option value={9} label="9"/>
                                        <option value={10} label="10"/>
                                        <option value={11} label="11"/>
                                        <option value={12} label="12"/>
                                        <option value={13} label="13"/>
                                        <option value={14} label="14"/>
                                        <option value={15} label="15"/>
                                        <option value={16} label="16"/>
                                        <option value={17} label="17"/>
                                        <option value={18} label="18"/>
                                        <option value={19} label="19"/>
                                        <option value={20} label="20"/>
                                        <option value={21} label="21"/>
                                        <option value={22} label="22"/>
                                        <option value={23} label="23"/>
                                        <option value={24} label="24"/>
                                        <option value={25} label="25"/>
                                        <option value={26} label="26"/>
                                        <option value={27} label="27"/>
                                        <option value={28} label="28"/>
                                        <option value={29} label="29"/>
                                        <option value={30} label="Varios"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="spaces">
                                    <Label>Amoblado</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.spaces.furnished}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'furnished')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value="No" label="No"/>
                                        <option value="Si" label="Si"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="spaces">
                                    <Label>Baulera</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.spaces.storage}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'storage')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value="No" label="No"/>
                                        <option value="Si" label="Si"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="spaces">
                                    <Label>Dep. Ser</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.spaces.depser}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'depser')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value="No" label="No"/>
                                        <option value="Si" label="Si"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="spaces">
                                    <Label>SUM</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.spaces.sum}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'sum')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value="No" label="No"/>
                                        <option value="Si" label="Si"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <h2>Completar <b>Características</b></h2>
                        <Row>
                            <Col sm={2}>
                                <FormGroup controlId="features">
                                    <Label>Ubicación</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.features.location}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'location')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value="Frente" label="Frente"/>
                                        <option value="Contrafrente" label="Contrafrente"/>
                                        <option value="Lateral" label="Lateral"/>
                                        <option value="Interno" label="Interno"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="features">
                                    <Label>Orientación</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.features.orientation}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'orientation')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value="Norte" label="Norte"/>
                                        <option value="Sur" label="Sur"/>
                                        <option value="Este" label="Este"/>
                                        <option value="Oeste" label="Oeste"/>
                                        <option value="Noreste" label="Noreste"/>
                                        <option value="Noroeste" label="Noroeste"/>
                                        <option value="Sudeste" label="Sudeste"/>
                                        <option value="Sudoeste" label="Sudoeste"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="features">
                                    <Label>Luminosidad</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.features.lightness}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'lightness')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value="Excelente" label="Excelente"/>
                                        <option value="Muy Bueno" label="Muy bueno"/>
                                        <option value="Bueno" label="Bueno"/>
                                        <option value="Regular" label="Regular"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="features">
                                    <Label>Calefacción</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.features.heating}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'heating')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value="No posee" label="No posee"/>
                                        <option value="Gas natural" label="Gas natural"/>
                                        <option value="Gas envasado" label="Gas envasado"/>
                                        <option value="Tiro balanceado" label="Tiro balanceado"/>
                                        <option value="Estufas eléctricas" label="Estufas eléctricas"/>
                                        <option value="Split frío/calor" label="Split frío/Calor"/>
                                        <option value="Salamandra" label="Salamandra"/>
                                        <option value="Hogar a leña" label="Hogar a leña"/>
                                        <option value="Hogar a gas" label="Hogar a gas"/>
                                        <option value="Radiadores" label="Radiadores"/>
                                        <option value="Caldera" label="Caldera"/>
                                        <option value="Caldera individual" label="Caldera individual"/>
                                        <option value="Losa radiante" label="Losa radiante"/>
                                        <option value="Zócalo radiante" label="Zócalo radiante"/>
                                        <option value="Piso radiante" label="Piso radiante"/>
                                        <option value="Eskabes" label="Eskabes"/>
                                        <option value="Central" label="Central"/>
                                        <option value="Central por radiadores" label="Central por radiadores"/>
                                        <option value="Central por ducto" label="Central por ducto"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="features">
                                    <Label>Para refacción</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.features.repair}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'repair')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value="No" label="No"/>
                                        <option value="Si" label="Si"/>
                                        <option value="1 Año" label="1 Año"/>
                                        <option value="2 Años" label="2 Años"/>
                                        <option value="3 Años" label="3 Años"/>
                                        <option value="4 Años" label="4 Años"/>
                                        <option value="5 Años" label="5 Años"/>
                                        <option value="6 Años" label="6 Años"/>
                                        <option value="7 Años" label="7 Años"/>
                                        <option value="10 Años" label="10 Años"/>
                                        <option value="Más de 10 años" label="Más de 10 años"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="features">
                                    <Label>Fue refaccionado</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.features.refurbished}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'refurbished')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value="No" label="No"/>
                                        <option value="Si" label="Si"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="features">
                                    <Label>Estado</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.features.status}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'status')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value="Nuevo" label="Nuevo"/>
                                        <option value="A estrenar" label="A estrenar"/>
                                        <option value="Excelente" label="Excelente"/>
                                        <option value="Muy Bueno" label="Muy bueno"/>
                                        <option value="Bueno" label="Bueno"/>
                                        <option value="Usado" label="Usado"/>
                                        <option value="Regular" label="Regular"/>
                                        <option value="A reciclar" label="A reciclar"/>
                                        <option value="A demoler" label="A demoler"/>
                                        <option value="En construcción" label="En construcción"/>
                                        <option value="Refaccionado" label="Refaccionado"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="features">
                                    <Label>Año de construcción</Label>
                                    <FormControl type="number" placeholder="----"/>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="features">
                                    <Label>Sup. Total</Label>
                                    <FormControl type="number" placeholder="m2"/>
                                    {/* if campo hectareas */}
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="features">
                                    <Label>Sup. Cubierta</Label>
                                    <FormControl type="number" placeholder="m2"/>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="features">
                                    <Label>Sup. Lote</Label>
                                    <FormControl type="number" placeholder="m"/>
                                    <FormControl type="number" placeholder="m"/>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="features">
                                    <Label>Piso</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.features.floor}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'floor')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value={1} label="1"/>
                                        <option value={2} label="2"/>
                                        <option value={3} label="3"/>
                                        <option value={4} label="4"/>
                                        <option value={5} label="5"/>
                                        <option value={6} label="6"/>
                                        <option value={7} label="7"/>
                                        <option value={8} label="8"/>
                                        <option value={9} label="9"/>
                                        <option value={10} label="10"/>
                                        <option value={11} label="11"/>
                                        <option value={12} label="12"/>
                                        <option value={13} label="13"/>
                                        <option value={14} label="14"/>
                                        <option value={15} label="15"/>
                                        <option value={16} label="16"/>
                                        <option value={17} label="17"/>
                                        <option value={18} label="18"/>
                                        <option value={19} label="19"/>
                                        <option value={20} label="20"/>
                                        <option value={21} label="21"/>
                                        <option value={22} label="22"/>
                                        <option value={23} label="23"/>
                                        <option value={24} label="24"/>
                                        <option value={25} label="25"/>
                                        <option value={26} label="26"/>
                                        <option value={27} label="27"/>
                                        <option value={28} label="28"/>
                                        <option value={29} label="29"/>
                                        <option value={30} label="30"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <h2>Completar <b>Servicios</b></h2>
                        <Row>
                            <Col sm={2}>
                                <FormGroup controlId="services">
                                    <Label>Gas</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.services.gas}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'gas')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value="No" label="No"/>
                                        <option value="Si" label="Si"/>
                                        <option value="Gas Natural" label="Gas Natural"/>
                                        <option value="Garrafa" label="Garrafa"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="services">
                                    <Label>Agua</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.services.water}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'water')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value="No" label="No"/>
                                        <option value="Si" label="Si"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="services">
                                    <Label>Cloacas</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.services.sewer}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'sewer')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value="No" label="No"/>
                                        <option value="Si" label="Si"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="services">
                                    <Label>Teléfono</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.services.phone}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'phone')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value="No" label="No"/>
                                        <option value="Si" label="Si"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="services">
                                    <Label>Asfalto</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.services.pavement}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'pavement')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value="No" label="No"/>
                                        <option value="Si" label="Si"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="services">
                                    <Label>Electricidad</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.services.electricity}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'electricity')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value="No" label="No"/>
                                        <option value="Si" label="Si"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="services">
                                    <Label>Cable</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.services.cabletv}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'cabletv')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value="No" label="No"/>
                                        <option value="Si" label="Si"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="services">
                                    <Label>Seguridad</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.services.security}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'security')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value="No" label="No"/>
                                        <option value="Si" label="Si"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="services">
                                    <Label>Expensas</Label>
                                    <FormControl type="number" placeholder="$"/>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <h2>Completar <b>Legales</b></h2>
                        <Row>
                            <Col sm={2}>
                                <FormGroup controlId="legal">
                                    <Label>Apto Banco</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.legal.bank}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'bank')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value="No" label="No"/>
                                        <option value="Si" label="Si"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col sm={2}>
                                <FormGroup controlId="legal">
                                    <Label>Apto Prof.</Label>
                                    <FormControl
                                        componentClass="select"
                                        value={dwelling.legal.prof}
                                        placeholder="Seleccione"
                                        onChange={e => this.handleChange(e, 'prof')}
                                    >
                                        <option disabled label="Seleccione"/>
                                        <option value="No" label="No"/>
                                        <option value="Si" label="Si"/>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <ButtonToolbar className="pull-left">
                            <Button href="#/dwellings/new1">Atrás</Button>
                        </ButtonToolbar>
                    </Col>
                    <Col sm={6}>
                        <ButtonToolbar className="pull-right">
                            <Button onClick={() => this.handleSubmit()}>Siguiente</Button>
                        </ButtonToolbar>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default connect(
    state => ({
        dwelling: state.dwelling.dwelling
    }),
    dispatch => ({
        savePartialDwelling: dwelling => dispatch(savePartialDwelling(dwelling))
    })
)(Characteristics);
