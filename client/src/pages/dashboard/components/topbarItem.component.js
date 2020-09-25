import React from 'react';

function TopBarItem({icon , text, route}) {
    return (
        <div className='topbar-item'>
            <i className={icon}></i>
        </div>
    );
}

export default TopBarItem;