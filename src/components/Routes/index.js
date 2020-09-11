import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../HomePage';
import FrontEndPage from '../FrontEndPage';
import BackEndPage from '../BackEndPage';

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ HomePage } />
            <Route path='/front-end' component={ FrontEndPage } />
            <Route path='/back-end' component={ BackEndPage } />
        </Switch>
    </BrowserRouter>
);

export default Rotas;