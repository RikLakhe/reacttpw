import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Layout, Menu} from "antd";

import "./index.sass"

import Logo from '../../assets/img/finallogo.png'
import SmallLogo from '../../assets/img/finalSmalllogo.png'
import MenuRoute from "../../constants/menuRoutes.js"
import DynamicIcon from "../../components/Common/DynamicIcon";

const {Sider} = Layout;
const SubMenu = Menu.SubMenu;

const AppSideNav = (props) => {
    const {collapsed} = props;

    const getSubmenuOrMenuitem = (item) => {
        const {location} = props;
        const segmentURL = window.location.hash.split('/');
        const secondSegmentURL = '/' + segmentURL[1];
        const currentPathname = location && location.pathname ? location.pathname : '/';
        const lastSegmentURL = currentPathname.substr(currentPathname.lastIndexOf('/') + 1);

        console.log('agaga', segmentURL, secondSegmentURL, currentPathname, lastSegmentURL)

        if (item.children && item.children.some((child) => child.name)) {
            const childrenItems = getNavMenuItems(item.children);

            // hide submenu if there's no children items
            if (childrenItems && childrenItems.length > 0) {
                {
                    console.log(secondSegmentURL, item.path, lastSegmentURL === 'edit')
                }
                return (
                    <SubMenu
                        title={
                            <span>
                              <DynamicIcon type={item.icon}/>
                              <span className="nav-text">
                                  {item.name}
                              </span>
                            </span>
                        }
                        key={item.key}
                        className={
                            secondSegmentURL === item.path &&
                            (lastSegmentURL === 'edit' || lastSegmentURL === 'detail')
                                ? 'ant-menu-item-selected'
                                : ''
                        }
                    >
                        {childrenItems}
                    </SubMenu>
                );
            }
            return null;
        } else {
            return (
                <Menu.Item
                    key={item.path}
                    className={
                        secondSegmentURL === item.path &&
                        item.parentOnly &&
                        (lastSegmentURL === 'edit' || lastSegmentURL === 'detail' || lastSegmentURL === 'new')
                            ? 'ant-menu-item-selected'
                            : ''
                    }
                >
                    <Link to={item.path} style={{width: '100%', display: 'block'}}>
                        <DynamicIcon type={item.icon}/>
                        <span className="nav-text">{item.menuName || item.name}</span>
                    </Link>
                </Menu.Item>
            );
        }
    }

    const getNavMenuItems = menuData => {
        if (!menuData) {
            return []
        } else {
            return menuData.map(menuItem => {
                return getSubmenuOrMenuitem(menuItem)
            }).filter((item) => item);
        }
    }

    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            style={{
                position: "fixed",
                height: "100vh",
            }}
        >
            <div className="w-100" style={{textAlign:'center',backgroundColor: '#fff',}}>
                <Link to={"/home"}>
                    <img src={!collapsed ? Logo : SmallLogo}
                         style={{backgroundColor: '#fff', height: '35px'}}/>
                </Link>
            </div>
            <Menu
                theme="dark"
                mode="inline"
                // defaultSelectedKeys={['1']}
                style={{height: "100%",}}
            >
                {getNavMenuItems(MenuRoute)}
            </Menu>
        </Sider>
    )
}

export default AppSideNav;