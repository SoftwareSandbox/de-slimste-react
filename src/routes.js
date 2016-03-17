import React from 'react';
import {DefaultRoute, NotFoundRoute, Redirect, Route} from 'react-router';

import App from './components/app';
import Homepage from './components/homepage';
import AuthorPage from './components/authors/authorPage';
import AboutPage from './components/about/aboutPage';
import NotFoundPage from './components/notFoundPage';
import ManageAuthorPage from './components/authors/manageAuthorPage';

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
        <Route name="home" handler={Homepage} />
        <Route name="authors" handler={AuthorPage} />

        <DefaultRoute name="invoerenSpelers" handler={InvoerenSpelersPage} />

        <Route name="driezesnegen" handler={DrieZesNegenPage} />
        <Route name="opendeur" handler={OpenDeurPage} />
        <Route name="puzzel" handler={PuzzelPage} />
        <Route name="galerij" handler={GalerijPage} />
        <Route name="collectiefgeheugen" handler={CollectiefGeheugenPage} />
        <Route name="finale" handler={FinalePage} />

        <Route name="addAuthor" path="author" handler={ManageAuthorPage} />
        <Route name="manageAuthor" path="author/:id" handler={ManageAuthorPage} />
        <Route name="about" path="about" handler={AboutPage} />
        <NotFoundRoute handler={NotFoundPage} />
    </Route>
);

export default routes;
