import React, { Fragment } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

// Import custom components
import PublicRoute from '../PublicRoute';

import {
    AsyncAppLayout,
    AsyncInternalServer,
    AsyncNotFound,
    AsyncForbidden,
    AsyncDashboard,
    AsyncSetting,
    AsyncPrice,
    AsyncMember
} from './AsyncComponent';

const App = () => (
    <Fragment>
        <Switch>
            <PublicRoute exact path="/" layout={AsyncAppLayout} component={AsyncDashboard} />

            <PublicRoute exact path="/home" layout={AsyncAppLayout} component={AsyncDashboard} />
            <PublicRoute exact path="/price" layout={AsyncAppLayout} component={AsyncPrice} />
            <PublicRoute path="/member" layout={AsyncAppLayout} component={AsyncMember} />
            <PublicRoute path="/setting" layout={AsyncAppLayout} component={AsyncSetting} />

            <Route path="/403" layout={AsyncAppLayout} component={AsyncForbidden} />
            <Route path="/500" component={AsyncInternalServer} />
            <Route path="/404" component={AsyncNotFound} />
            {/*<Route component={AsyncNotFound} />*/}
            <PublicRoute layout={AsyncAppLayout} component={AsyncDashboard} />
        </Switch>
    </Fragment>
);

export default withRouter(App);
