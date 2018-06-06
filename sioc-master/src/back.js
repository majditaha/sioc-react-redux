/* global window document */
import 'font-awesome/css/font-awesome.min.css';
import 'flag-icon-css/css/flag-icon.min.css';
import 'simple-line-icons/css/simple-line-icons.css';
import React from 'react';
import ReactDOM from 'react-dom';

import {AppContainer} from 'react-hot-loader';
import StorageService from './services/storage';

import './sass/back.scss';
import './sass/core/_dropdown-menu-right.scss';

import Root from './containers/Root';
import Back from './components/Back';
import configureStore from './store';

if (!StorageService.getAuthToken()) {
    window.location = 'signIn.html';
}

const store = configureStore();

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Root store={store} comp={Back}/>
        </AppContainer>,
        document.getElementById('root')
    );
};

render();

if (module.hot) {
    module.hot.accept('./components/Back', render);
}
