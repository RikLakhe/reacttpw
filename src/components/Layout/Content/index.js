import React from "react";

import {Layout} from "antd";

import "./index.sass"

const {Content} = Layout

const AppContent = props => {
    return (
        <Content
            className="site-layout-background content-main"
            style={{
                margin: '24px 16px',
                // padding: 24,
                minHeight: 280,
            }}>
            {props.children}
        </Content>
    )
}

export default AppContent;