import React from "react";
import {Route, withRouter} from "react-router";
import loadable from '@loadable/component'
import pMinDelay from 'p-min-delay'

import Loader from "../../components/Loading";
const List = loadable(() => pMinDelay(import("./list"), 200), {fallback: <Loader/>})
const Form = loadable(() => pMinDelay(import("./form"), 200), {fallback: <Loader/>})
const Audit = loadable(() => pMinDelay(import("./audit"), 200), {fallback: <Loader/>})

const index = ({match}) =>(
        <switch>
            <Route exact path={`${match.url}/`} component={List}/>
            <Route exact path={`${match.url}/new`} component={Form}/>
            <Route exact path={`${match.url}/audit`} component={Audit}/>
        </switch>
)

export default withRouter(index)