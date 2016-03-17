import React from 'react';
import {DefaultRoute, NotFoundRoute, Redirect, Route} from 'react-router';

import App from './components/app';
import Homepage from './components/app';
import AuthorPage from './components/app';
import AboutPage from './components/app';
import NotFoundPage from './components/app';
import ManageAuthorPage from './components/app';

import InvoerenSpelersPage from './components/pages/invoerenSpelersPage';
import DrieZesNegenPage from './components/pages/drieZesNegenPage';
import OpenDeurPage from './components/pages/openDeurPage';
import PuzzelPage from './components/pages/puzzelPage';
import GalerijPage from './components/pages/galerijPage';
import CollectiefGeheugenPage from './components/pages/collectiefGeheugenPage';
import FinalePage from './components/pages/finalePage';

const routes = (
    <Route name="app" path="/" handler={App}>
        <Route handler={InvoerenSpelersPage} />
        <Route name="home" handler={InvoerenSpelersPage} />

        <DefaultRoute name="invoerenSpelers" handler={InvoerenSpelersPage} />

        <Route name="driezesnegen" handler={DrieZesNegenPage} />
        <Route name="opendeur" handler={OpenDeurPage} />
        <Route name="puzzel" handler={PuzzelPage} />
        <Route name="galerij" handler={GalerijPage} />
        <Route name="collectiefgeheugen" handler={CollectiefGeheugenPage} />
        <Route name="finale" handler={FinalePage} />
    </Route>
);

export default routes;
