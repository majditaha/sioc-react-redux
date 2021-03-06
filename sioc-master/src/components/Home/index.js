/* global window */
import React, {Component, Fragment} from 'react';
import Splash from './Splash';
import Search from './Search';
import Intro from './Intro';
import Footer from './Footer';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {width: 0, height: 0};
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
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    render() {
        const size = {
            height: this.state.height,
            width: this.state.width
        };
        return (
            <Fragment>
                <section className="intro centered" style={size}>
                    <Splash/>
                </section>
                <section className="highlights">
                    <Search/>
                </section>
                <section className="info centered" style={size}>
                    <Intro/>
                </section>
                <section className="footer">
                    <Footer/>
                </section>
            </Fragment>
        );
    }
}

export default Home;
