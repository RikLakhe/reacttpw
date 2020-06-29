import React from "react";
import {Link} from "react-router-dom";
import {Layout, Menu} from "antd";

import "./index.sass"

import Logo from '../../../assets/img/finallogo.png'
import SmallLogo from '../../../assets/img/finalSmalllogo.png'
import MenuRoute from "../../../constants/MenuRoute.js"
import DynamicIcon from "../../Common/DynamicIcon";

const {Sider} = Layout;
const SubMenu = Menu.SubMenu;

const AppSideNav = (props) => {
    const {collapsed} = props;

    const getSubmenuOrMenuitem = (item) => {
        const {location} = props;
        const segmentURL = window.location.pathname.split('/');
        const secondSegmentURL = '/' + segmentURL[1];
        const currentPathname = location && location.pathname ? location.pathname : '/';
        const lastSegmentURL = currentPathname.substr(currentPathname.lastIndexOf('/') + 1);

        console.log('agaga',props,segmentURL,secondSegmentURL,currentPathname,lastSegmentURL)

        if (item.children && item.children.some((child) => child.name)) {
            const childrenItems = getNavMenuItems(item.children);

            // hide submenu if there's no children items
            if (childrenItems && childrenItems.length > 0) {
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
                        (lastSegmentURL === 'edit' || lastSegmentURL === 'detail')
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
                const itemDom = getSubmenuOrMenuitem(menuItem)
                return itemDom
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
                height: "100vh"
            }}
        >
            <Link to={"/home"}>
                {!collapsed ?
                    <img src={Logo} style={{backgroundColor: '#fff', width: '100%', height: '64px'}}/>
                    : <img src={SmallLogo} style={{backgroundColor: '#fff', width: '100%', height: '64px'}}/>}
            </Link>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{height: "100%",}}>
                {getNavMenuItems(MenuRoute)}
            </Menu>
        </Sider>
    )
}

export default AppSideNav;