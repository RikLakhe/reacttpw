import React, { Fragment } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

// Import custom components
import PublicRoute from '../PublicRoute';

import {
    AsyncAppLayout,
    AsyncMember
} from './AsyncComponent';

const App = () => (
    <Fragment>
        <Switch>
            <PublicRoute path="/member" layout={AsyncAppLayout} component={AsyncMember} />
        </Switch>
    </Fragment>
);

export default withRouter(App);
