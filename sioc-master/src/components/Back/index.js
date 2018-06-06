/* global */
import React, {Fragment} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Admin from '../Admin';
import Footer from './Footer';
import Header from './Header';

const App = () => (
    <HashRouter>
        <Fragment>
            <Header/>
            <Switch>
                <Route path="/" name="admin" component={Admin}/>
            </Switch>
            <Footer/>
        </Fragment>
    </HashRouter>
);

export default App;
