import React from "react";

import {Layout} from "antd";

import "./index.sass"

const {Content} = Layout

const AppContent = props => {
    return (
        <Content className="content-main">
            {props.children}
        </Content>
    )
}

export default AppContent;