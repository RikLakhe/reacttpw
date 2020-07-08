import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from '../Exception/NotFoundContainer';

import MemberFormContainer from './MemberFormContainer.js';
import MemberListContainer from './MemberListContainer.js';

const MemberContainer = ({ match }) => (
    <Fragment>
        <Switch>
            <Route
                exact
                path={`${match.url}`}
                component={MemberListContainer}
            />
            <Route
                exact
                path={`${match.url}/new`}
                component={MemberFormContainer}
            />
            <Route component={NotFound} />
        </Switch>
    </Fragment>
);

export default MemberContainer;
