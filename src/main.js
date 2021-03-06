import React from 'react';
import { render } from 'react-dom';
import {IndexRoute, NotFoundRoute, Redirect, Route, Router, hashHistory} from 'react-router';

import App from './components/app';
import Homepage from './components/app';
import AuthorPage from './components/app';
import AboutPage from './components/app';
import NotFoundPage from './components/app';
import ManageAuthorPage from './components/app';

import InvoerenSpelersPage from './components/pages/invoerenSpelersPage';
import DrieZesNegenController from './components/pages/drieZesNegen/drieZesNegenController';
import OpenDeurPage from './components/pages/openDeurPage';
import PuzzelOverzichtPage from './components/pages/puzzel/puzzelOverzichtPage';
import PuzzelPage from './components/pages/puzzel/puzzelPage';
import GalerijPage from './components/pages/galerijPage';
import CollectiefGeheugenPage from './components/pages/collectiefGeheugenPage';
import FinalePage from './components/pages/finalePage';

import QuizzerStartPage from './components/pages/quizzer/quizzerStartPage';


render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={InvoerenSpelersPage}/>
            <Route path="home" component={InvoerenSpelersPage}/>
            <Route path="quizzer" component={QuizzerStartPage} />
            <Route path="driezesnegen" component={DrieZesNegenController}/>
            <Route path="opendeur" component={OpenDeurPage}/>
            <Route path="puzzelOverzicht" component={PuzzelOverzichtPage}/>
            <Route path="puzzel/:puzzelNummer" component={PuzzelPage}/>
            <Route path="galerij" component={GalerijPage}/>
            <Route path="collectiefgeheugen" component={CollectiefGeheugenPage}/>
            <Route path="finale" component={FinalePage}/>
        </Route>
    </Router>
), document.getElementById('app'));
