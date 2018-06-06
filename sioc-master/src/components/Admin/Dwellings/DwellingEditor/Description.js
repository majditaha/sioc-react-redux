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
import {requestSaveDwelling} from '../../../../actions/index';

class Description extends Component {
    static propTypes = {
        requestSaveDwelling: PropTypes.func.isRequired,
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

    handleSubmit() {
        const {dwelling} = this.state;
        this.props.requestSaveDwelling(dwelling);
        this.props.history.push('/dwellings/latest');
    }
    render() {
        const {dwelling} = this.state;
        return (
            <Grid className="animated fadeIn">
                <Row>
                    <Col sm={12}>
                        <h2>Carga de Imágenes</h2>
                        ...
                        <br/><br/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <FormGroup controlId="occupationStatus">
                            <Label>Estado Ocupacional</Label>
                            <FormControl
                                componentClass="select"
                                value={dwelling.occupationStatus}
                                placeholder="Seleccione"
                                onChange={e => this.handleChange(e)}
                            >
                                <option disabled label="Seleccione"/>
                                <option value="Disponible" label="Disponible"/>
                                <option value="Alquilada" label="Alquilada"/>
                                <option value="Vendida" label="Vendida"/>
                                <option value="Reservada" label="Reservada"/>
                                <option value="Suspendida" label="Suspendida"/>
                            </FormControl>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <h2>Descripción General</h2>
                        <FormGroup controlId="generalDescription">
                            <FormControl
                                componentClass="textarea"
                                value={dwelling.generalDescription}
                                onChange={e => this.handleChange(e)}
                                placeholder="Escriba una Descripcion general"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <h2>Descripción Privada</h2>
                        <FormGroup controlId="privateDescription">
                            <FormControl
                                componentClass="textarea"
                                value={dwelling.privateDescription}
                                onChange={e => this.handleChange(e)}
                                placeholder="Escriba una Descripcion privada"
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <ButtonToolbar className="pull-left">
                            <Button href="#/dwellings/characteristics">Atrás</Button>
                        </ButtonToolbar>
                    </Col>
                    <Col sm={6}>
                        <ButtonToolbar className="pull-right">
                            <Button onClick={() => this.handleSubmit()}>Guardar</Button>
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
        requestSaveDwelling: dwelling => dispatch(requestSaveDwelling(dwelling))
    })
)(Description);
