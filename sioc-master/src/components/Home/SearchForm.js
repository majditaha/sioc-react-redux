import React, {Component} from 'react';
import {Grid, Row, Col, FormControl, FormGroup} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class SearchForm extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <Grid>
                <Row>
                    <Col sm={4} smOffset={4}>
                        <FormGroup controlId="" className="home-search">
                            <FormControl.Feedback className="input-has-icon">
                                <FontAwesome name="search" key="icon"/>
                            </FormControl.Feedback>
                            <FormControl
                                className="home-search-input"
                                type="text"
                                value=""
                                placeholder="Ingrese código, barrio o palabra clave"
                                maxLength={50}
                            />
                        </FormGroup>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default SearchForm;
