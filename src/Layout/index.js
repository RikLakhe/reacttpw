import React, {useState} from "react";

import {Layout} from 'antd'

import "./index.sass"

import AppSideNav from "./Sidenav";
import AppHeader from "./Header";
import AppFooter from "./Footer";
import AppContent from "./Content";

const AppLayout = props => {
    const [collapsed, setCollapsed] = useState(false)
    const toggle = () => setCollapsed(!collapsed)

    return (
        <Layout className={`main-layout`}>
            <AppSideNav collapsed={collapsed} {...props}/>
            <Layout
                className={`site-layout ${collapsed ? "sidenav-collapsed" : "sidenav-not-collapsed"}`}
                // style={{marginLeft: collapsed ? 80 : 200}}
            >
                <AppHeader toggle={toggle} collapsed={collapsed}/>
                <AppContent>
                    {props.children}
                </AppContent>
                <AppFooter/>
            </Layout>
        </Layout>
    )
}

export default AppLayout;