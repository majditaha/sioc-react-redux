/* eslint-disable max-len */
import React, {Component} from 'react';
import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText,
    Row,
    Col
} from 'reactstrap';
import classnames from 'classnames';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === '1'})}
                            onClick={() => {
                                this.toggle('1');
                            }}
                        >
                            Noticias
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === '2'})}
                            onClick={() => {
                                this.toggle('2');
                            }}
                        >
                            Ultimas Propiedades
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <h4>
                                    los administradores van a tener una función de crear publicaciones que se van a
                                    mostrar acá
                                </h4>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <h4>ultimas propiedades (9) cargadas (de todas las inmobs)</h4>
                            </Col>
                            <Col sm="4">
                                <Card>
                                    <CardImg
                                        // eslint-disable-next-line react/jsx-max-props-per-line
                                        top width="100%"
                                        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                                        alt="Card image cap"
                                    />
                                    <CardBody>
                                        <CardTitle> Departamento en Alquiler 54 423</CardTitle>
                                        <CardText>1.000.000</CardText>
                                        <CardText>
                                            <small className="text-muted pull-left">Subida hace 3 mins</small>
                                            <small className="text-muted pull-right">#321321</small>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col sm="4">
                                <Card>
                                    <CardImg
                                        // eslint-disable-next-line react/jsx-max-props-per-line
                                        top width="100%"
                                        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                                        alt="Card image cap"
                                    />
                                    <CardBody>
                                        <CardTitle> Departamento en Alquiler 54 423</CardTitle>
                                        <CardText>1.000.000</CardText>
                                        <CardText>
                                            <small className="text-muted pull-left">Subida hace 3 mins</small>
                                            <small className="text-muted pull-right">#321321</small>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col sm="4">
                                <Card>
                                    <CardImg
                                        // eslint-disable-next-line react/jsx-max-props-per-line
                                        top width="100%"
                                        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                                        alt="Card image cap"
                                    />
                                    <CardBody>
                                        <CardTitle> Departamento en Alquiler 54 423</CardTitle>
                                        <CardText>1.000.000</CardText>
                                        <CardText>
                                            <small className="text-muted pull-left">Subida hace 3 mins</small>
                                            <small className="text-muted pull-right">#321321</small>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col sm="4">
                                <Card>
                                    <CardImg
                                        // eslint-disable-next-line react/jsx-max-props-per-line
                                        top width="100%"
                                        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                                        alt="Card image cap"
                                    />
                                    <CardBody>
                                        <CardTitle> Departamento en Alquiler 54 423</CardTitle>
                                        <CardText>1.000.000</CardText>
                                        <CardText>
                                            <small className="text-muted pull-left">Subida hace 3 mins</small>
                                            <small className="text-muted pull-right">#321321</small>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col sm="4">
                                <Card>
                                    <CardImg
                                        // eslint-disable-next-line react/jsx-max-props-per-line
                                        top width="100%"
                                        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                                        alt="Card image cap"
                                    />
                                    <CardBody>
                                        <CardTitle> Departamento en Alquiler 54 423</CardTitle>
                                        <CardText>1.000.000</CardText>
                                        <CardText>
                                            <small className="text-muted pull-left">Subida hace 3 mins</small>
                                            <small className="text-muted pull-right">#321321</small>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col sm="4">
                                <Card>
                                    <CardImg
                                        // eslint-disable-next-line react/jsx-max-props-per-line
                                        top width="100%"
                                        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                                        alt="Card image cap"
                                    />
                                    <CardBody>
                                        <CardTitle> Departamento en Alquiler 54 423</CardTitle>
                                        <CardText>1.000.000</CardText>
                                        <CardText>
                                            <small className="text-muted pull-left">Subida hace 3 mins</small>
                                            <small className="text-muted pull-right">#321321</small>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col sm="4">
                                <Card>
                                    <CardImg
                                        // eslint-disable-next-line react/jsx-max-props-per-line
                                        top width="100%"
                                        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                                        alt="Card image cap"
                                    />
                                    <CardBody>
                                        <CardTitle> Departamento en Alquiler 54 423</CardTitle>
                                        <CardText>1.000.000</CardText>
                                        <CardText>
                                            <small className="text-muted pull-left">Subida hace 3 mins</small>
                                            <small className="text-muted pull-right">#321321</small>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col sm="4">
                                <Card>
                                    <CardImg
                                        // eslint-disable-next-line react/jsx-max-props-per-line
                                        top width="100%"
                                        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                                        alt="Card image cap"
                                    />
                                    <CardBody>
                                        <CardTitle> Departamento en Alquiler 54 423</CardTitle>
                                        <CardText>1.000.000</CardText>
                                        <CardText>
                                            <small className="text-muted pull-left">Subida hace 3 mins</small>
                                            <small className="text-muted pull-right">#321321</small>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col sm="4">
                                <Card>
                                    <CardImg
                                        // eslint-disable-next-line react/jsx-max-props-per-line
                                        top width="100%"
                                        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                                        alt="Card image cap"
                                    />
                                    <CardBody>
                                        <CardTitle> Departamento en Alquiler 54 423</CardTitle>
                                        <CardText>1.000.000</CardText>
                                        <CardText>
                                            <small className="text-muted pull-left">Subida hace 3 mins</small>
                                            <small className="text-muted pull-right">#321321</small>
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default Dashboard;
