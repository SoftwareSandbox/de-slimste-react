import React from 'react';
import routes from './routes';
import { render } from 'react-dom';
import {IndexRoute, NotFoundRoute, Redirect, Route, Router, browserHistory} from 'react-router';

import App from './components/app';
import Homepage from './components/app';
import AuthorPage from './components/app';
import AboutPage from './components/app';
import NotFoundPage from './components/app';
import ManageAuthorPage from './components/app';

import InvoerenSpelersPage from './components/pages/invoerenSpelersPage';
import DrieZesNegenPage from './components/pages/drieZesNegen/drieZesNegenController';
import OpenDeurPage from './components/pages/openDeurPage';
import PuzzelPage from './components/pages/puzzelPage';
import GalerijPage from './components/pages/galerijPage';
import CollectiefGeheugenPage from './components/pages/collectiefGeheugenPage';
import FinalePage from './components/pages/finalePage';

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={InvoerenSpelersPage}/>
            <Route path="home" component={InvoerenSpelersPage}/>
            <Route path="driezesnegen" component={DrieZesNegenPage}/>
            <Route path="opendeur" component={OpenDeurPage}/>
            <Route path="puzzel" component={PuzzelPage}/>
            <Route path="galerij" component={GalerijPage}/>
            <Route path="collectiefgeheugen" component={CollectiefGeheugenPage}/>
            <Route path="finale" component={FinalePage}/>
        </Route>
    </Router>
), document.getElementById('app'));
