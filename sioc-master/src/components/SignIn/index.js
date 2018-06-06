/* global window */
import React, {Component} from 'react';
import {Grid, Row, Col, Button, Form, FormGroup, FormControl} from 'react-bootstrap';
import {delay} from 'lodash';
import FontAwesome from 'react-fontawesome';
import SignInService from '../../services/signIn';
import StorageService from '../../services/storage';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: '', clock: null};
    }

    async handleSubmit(e) {
        e.preventDefault();
        try {
            const result = await SignInService.login(this.state.username, this.state.password);
            if (result.token) {
                StorageService.setAuthToken(result.token);
                window.location = '/back.html';
            } else {
                this.setState({invalidLogin: true});
            }
        } catch (ex) {
            this.setState({invalidLogin: true});
            clearTimeout(this.state.clock);
            this.setState({clock: delay(() => this.setState({invalidLogin: false}), 3500)});
        }
    }

    handleChange(e) {
        this.setState({[e.target.id]: e.target.value});
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col sm={4} smOffset={4}>
                        <Form onSubmit={e => this.handleSubmit(e)}>
                            <FormGroup>
                                <h1><FontAwesome name="chevron-circle-right"/> Iniciar sesión</h1>
                            </FormGroup>
                            <FormGroup controlId="username">
                                <FormControl
                                    type="text"
                                    value={this.state.username}
                                    placeholder="Usuario"
                                    required
                                    onChange={e => this.handleChange(e)}
                                />
                            </FormGroup>
                            <FormGroup controlId="password">
                                <FormControl
                                    type="password"
                                    value={this.state.password}
                                    placeholder="Password"
                                    required
                                    onChange={e => this.handleChange(e)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Button type="submit" bsStyle="primary">
                                    <FontAwesome name="power-off"/> Ingresar
                                </Button>
                            </FormGroup>
                            {this.state.invalidLogin &&
                            <FormGroup className="text-center text-danger">
                                <span>El Usuario o la Contraseña son inválidos</span>
                            </FormGroup>}
                        </Form>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default SignIn;
