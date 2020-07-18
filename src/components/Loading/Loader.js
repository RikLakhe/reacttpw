import React from "react";

import "./Loader.sass"

const Loader = props => {
    return (
        <div className={'app-loading'}>
            <div className="loading loading02">
               Loading...
            </div>
        </div>
    )
}

export default Loader;