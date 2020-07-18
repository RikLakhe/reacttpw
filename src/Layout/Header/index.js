import React from "react";

import {Layout} from 'antd'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';

const { Header } = Layout;

const AppHeader = props => {
    return (
        <Header className="site-layout-background layout-header" style={{ }}>
            {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: props.toggle,
            })}
        </Header>
    )
}

export default AppHeader;