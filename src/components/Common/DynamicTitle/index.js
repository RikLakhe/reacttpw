import React from "react";

const index = props =>{
    return(
        <div className={"main-title title w-100"}>
            <h5>{props.title}</h5>
            <div>
                breadcrumb
            </div>
        </div>
    )
}

export default index;