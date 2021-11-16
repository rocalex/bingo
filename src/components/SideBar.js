import React from 'react';
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


const SideBar = () => {
    return (
        <ProSidebar>
            <Menu iconShape="square">
                <MenuItem icon={<FaIcons.FaGem />}>Dashboard</MenuItem>
                <SubMenu title="Components" icon={<FaIcons.FaHeart />}>
                    <MenuItem>Component 1</MenuItem>
                    <MenuItem>Component 2</MenuItem>
                </SubMenu>
            </Menu>
        </ProSidebar>
    )
}

export default SideBar;