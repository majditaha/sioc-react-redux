import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Container,
    Row,
    Col,
    Card,
    CardText,
    CardTitle,
    CardBody,
    CardImg
} from 'reactstrap';
import PropTypes from 'prop-types';

import {requestDwellings} from '../../../actions';

class Latest extends Component {
    static propTypes = {
        requestDwellings: PropTypes.func.isRequired,
        dwellings: PropTypes.arrayOf(PropTypes.shape({}))
    };

    static defaultProps = {
        dwellings: null
    };

    componentDidMount() {
        this.props.requestDwellings();
    }

    renderContent() {
        return (
            <Container>
                <Row>
                    {this.props.dwellings.map(dwellings => (
                        <Col sm="4">
                            <Card key={dwellings._id}>
                                <CardImg
                                    // eslint-disable-next-line react/jsx-max-props-per-line
                                    top width="100%" src="http://via.placeholder.com/330x220"
                                    alt="Card image cap"
                                />
                                <CardBody>
                                    <CardTitle>
                                        {dwellings.publicationType}
                                        {dwellings.subtype}
                                        {dwellings.address.address}
                                    </CardTitle>
                                    <CardText>{dwellings.price} {dwellings.currency}</CardText>
                                    <CardText>
                                        <small className="text-muted pull-left">Subida hace 3 mins</small>
                                        <small className="text-muted pull-right">#321321</small>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }

    render() {
        return (
            <div className="animated fadeIn">
                <h3>Últimas Propiedades cargadas</h3>
                {this.props.dwellings && this.renderContent()}
            </div>
        );
    }
}

export default connect(
    state => ({dwellings: state.dwelling.dwellings}),
    dispatch => ({
        requestDwellings: () => dispatch(requestDwellings())
    })
)(Latest);
