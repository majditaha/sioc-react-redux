/* eslint-disable react/no-unused-prop-types */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
    Grid,
    Row,
    Col,
    FormControl,
    FormGroup,
    Button,
    ControlLabel,
    ButtonToolbar,
    ToggleButtonGroup,
    ToggleButton,
    Label
} from 'react-bootstrap';

import {savePartialDwelling} from '../../../../actions/index';
import GoogleSearchBox from '../../../Maps/GoogleSearchBox';
import {Dwelling} from '../../../../model/index';

class General extends Component {
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

    handleChange({target: {id, value}}) {
        this.setState(
            state => ({
                dwelling: (Object.assign(state.dwelling, {[id]: value}))
            })
        );
    }

    handleToggle(e, id) {
        this.setState(
            state => ({
                dwelling: (Object.assign(state.dwelling, {[id]: e}))
            })
        );
    }

    handleSubmit() {
        const {dwelling} = this.state;
        this.props.savePartialDwelling(dwelling);
        this.props.history.push('/dwellings/characteristics');
    }

    classModels() {
        const Comercial = [
            <option value="Local" key={1} label="Local"/>,
            <option value="Campo" key={2} label="Campo"/>,
            <option value="Cochera" key={3} label="Cochera"/>,
            <option value="Terreno" key={4} label="Terreno"/>,
            <option value="Oficina" key={5} label="Oficina"/>,
            <option value="Galpón" key={6} label="Galpón"/>,
            <option value="Edificio" key={7} label="Edificio"/>,
            <option value="Fondo de Comercio" key={8} label="Fondo de Comercio"/>,
            <option value="Depósito" key={9} label="Depósito"/>,
            <option value="Industriales" key={10} label="Industriales"/>,
            <option value="Countries y Barrios" key={11} label="Countries y Barrios"/>,
            <option value="Fracciones" key={12} label="Fracciones"/>,
            <option value="Otros" key={13} label="Otros"/>
        ];
        const Residencial = [
            <option value="Casa" key={1} label="Casa"/>,
            <option value="Departamento" key={2} label="Departamento"/>,
            <option value="Duplex" key={3} label="Duplex"/>,
            <option value="PH" key={4} label="PH"/>,
            <option value="Cabaña" key={5} label="Cabaña"/>,
            <option value="Piso" key={6} label="Piso"/>,
            <option value="Casa en Country" key={7} label="Casa en Country"/>
        ];

        switch (this.state.dwelling.type) {
            case 'Residencial':
                return Residencial;
            case 'Comercial':
                return Comercial;
            default:
                return null;
        }
    }


    render() {
        const {dwelling} = this.state;
        return (
            <Grid className="animated fadeIn">
                <Row>
                    <Col sm={2}>
                        <ButtonToolbar>
                            <ToggleButtonGroup
                                name="publicationType"
                                value={dwelling.publicationType}
                                placeholder="Seleccione"
                                onChange={e => this.handleToggle(e, 'publicationType')}
                            >
                                <ToggleButton className="btn btn-default" value="Alquiler">Alquiler</ToggleButton>
                                <ToggleButton className="btn btn-default" value="Venta">Venta</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonToolbar>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <FormGroup controlId="address">
                            <ControlLabel>Dirección</ControlLabel>
                            <GoogleSearchBox onChange={e => this.handleToggle(e, 'address')}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        {/* <Label> Tipo de Propiedad</Label> */}
                        <ButtonToolbar>
                            <ToggleButtonGroup
                                type="radio"
                                name="tipoPropiedad"
                                value={dwelling.type}
                                onChange={e => this.handleToggle(e, 'type')}
                            >
                                <ToggleButton className="btn btn-default" value="Residencial">Residencial</ToggleButton>
                                <ToggleButton className="btn btn-default" value="Comercial">Comercial</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonToolbar>
                    </Col>
                </Row>
                {dwelling.type &&
                <Row>
                    <Col sm={12}>
                        <FormGroup controlId="subtype">
                            <ControlLabel>Clase de Propiedad</ControlLabel>
                            <FormControl
                                componentClass="select"
                                value={dwelling.subtype}
                                placeholder="Seleccione"
                                onChange={e => this.handleChange(e)}
                            >
                                {this.classModels()}
                            </FormControl>
                        </FormGroup>
                    </Col>
                </Row>
                }
                <Row>
                    <Col sm={12}>
                        <Label>Moneda</Label>
                        <ButtonToolbar>
                            <ToggleButtonGroup
                                type="radio"
                                name="currency"
                                value={dwelling.currency}
                                onChange={e => this.handleToggle(e, 'currency')}
                            >
                                <ToggleButton className="btn btn-default" value="Peso">Peso</ToggleButton>
                                <ToggleButton className="btn btn-default" value="Dolar">Dólar</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonToolbar>
                        <FormGroup controlId="price">
                            <FormControl
                                type="number"
                                value={dwelling.price}
                                placeholder="$"
                                onChange={e => this.handleChange(e)}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
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
)(General);
