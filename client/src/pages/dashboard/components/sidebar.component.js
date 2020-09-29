import React from 'react';
import uniqid  from 'uniqid';
import MenuItem from './menuItem.component';
import { useLocation } from "react-router-dom";
import { menuItems } from '../consts';
import { Button } from 'react-bootstrap';
import './../style/sidebar.style.css';

function Sidebar() {
    let location = useLocation();

    return(
        <div className='sidebar-wrapper no-padding'>

            {/* page title  */}
            <div className='page-title'>
                <h1> Dashboard </h1>
            </div>

            {/* menu  */}
            <div className='menu-wrapper'>
                {menuItems.map( item => (
                    <MenuItem 
                        key={uniqid()}
                        icon={item.icon} 
                        text={item.text} 
                        route={item.route} 
                        active={location.pathname === item.route}
                    />
                ))}
            </div>

            {/* go back  */}
            <Button className='exit-button'>
                <i className="fas fa-arrow-left"></i>
                
                Exit Dashboard
            </Button>

        </div>
    );
}

export default Sidebar;