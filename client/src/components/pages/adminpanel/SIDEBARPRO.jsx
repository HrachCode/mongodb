import React from 'react'
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarContent,
} from 'react-pro-sidebar';
import { Link } from 'react-router-dom'
import 'react-pro-sidebar/dist/css/styles.css';
import {BugOutlined, StarFilled, SettingOutlined,
       HighlightOutlined,LogoutOutlined,MenuUnfoldOutlined} from '@ant-design/icons';
       

import './style.scss'

export default function ({ setPage }) {


    return (

        <div className="sidebar" >
            <ProSidebar>

                <Menu iconShape="square">
                    <SidebarHeader >
                        <MenuItem icon={< BugOutlined />} >Home  
                        <Link to="/"/>
                        </MenuItem>

                    </SidebarHeader>
                    <SidebarContent>
                        <MenuItem onClick = {()=> setPage(0) } icon={<LogoutOutlined />}>Homepage
                            </MenuItem>
                        <MenuItem onClick = {()=> setPage(1) } icon={<MenuUnfoldOutlined />}>Menu</MenuItem>
                        <MenuItem onClick = {()=> setPage(2) } icon={<HighlightOutlined />}>Footer</MenuItem>
                        <SubMenu title="Components" icon={< StarFilled />}>
                            <MenuItem>Component 1</MenuItem>
                            <MenuItem>Component 2</MenuItem>
                        </SubMenu>
                        <SubMenu title="Components" icon={< SettingOutlined />}>
                            <MenuItem>Component 1</MenuItem>
                            <MenuItem>Component 2</MenuItem>
                        </SubMenu>
                        <SubMenu title="Testing" icon={< SettingOutlined />}>
                            <MenuItem onClick = {()=> setPage(7) }>Admin items</MenuItem>
                            <MenuItem onClick = {()=> setPage(8) }>Add items</MenuItem>
                        </SubMenu>
                    </SidebarContent>

                </Menu>
            </ProSidebar>
        </div>

    )
}