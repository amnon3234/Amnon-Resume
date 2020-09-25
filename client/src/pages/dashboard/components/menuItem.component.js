import React from 'react';
import { useHistory } from "react-router-dom";

function MenuItem({icon, text, route, active}){
    let history = useHistory();

    const handleClick = () => {
        history.push(route);
    };

    return (
        <div onClick={handleClick} className= { active ? 'menu-item-wrapper active' : 'menu-item-wrapper'}>
            <i className={icon}></i>
            <p> {text} </p>
        </div>
    );
}

export default MenuItem;