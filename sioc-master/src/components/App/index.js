import React, {Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from '../Home';
import SignIn from '../SignIn';
import Back from '../Back';
import Resultados from '../Resultados';
import Propiedades from '../Propiedades';

import Header from './Header';

const App = () => (
    <BrowserRouter>
        <Fragment>
            <Header/>
            <main>
                <Switch>
                    <Route path="/propiedades" component={Propiedades}/>
                    <Route path="/resultados" component={Resultados}/>
                    <Route path="/signIn" component={SignIn}/>
                    <Route path="/back" component={Back}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </main>
        </Fragment>
    </BrowserRouter>
);

export default App;
