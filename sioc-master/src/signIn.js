/* global document window */
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import SignIn from './components/SignIn';
import StorageService from './services/storage';
import './sass/sign-in.scss';

if (StorageService.getAuthToken()) {
    window.location = 'back.html';
}

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <SignIn/>
        </AppContainer>,
        document.getElementById('root')
    );
};

render();

if (module.hot) {
    module.hot.accept('./components/SignIn', render);
}
